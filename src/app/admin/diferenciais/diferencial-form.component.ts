import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DiferencialService } from './diferencial.service';

@Component({
  selector: 'app-diferencial-form',
  templateUrl: './diferencial-form.component.html',
  standalone: false,
})
export class DiferencialFormComponent implements OnInit {
  form!: FormGroup;
  isEdit: boolean = false;
  id!: number;
  imagemPreview: string | ArrayBuffer | null = null;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private diferencialService: DiferencialService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: [''],
      descricao: [''],
      imagem: [null],
    });

    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.isEdit = true;
        this.id = +idParam;
        this.diferencialService.getById(this.id).subscribe(diferencial => {
          this.form.patchValue({
            titulo: diferencial.titulo,
            descricao: diferencial.descricao,
          });
          this.imagemPreview = diferencial.imagem;
        });
      }
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({ imagem: file });

      const reader = new FileReader();
      reader.onload = () => {
        this.imagemPreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this.loading = true;
    const formData = new FormData();
    formData.append('titulo', this.form.value.titulo);
    formData.append('descricao', this.form.value.descricao);
    if (this.form.value.imagem) {
      formData.append('imagem', this.form.value.imagem);
    }

    const request = this.isEdit
      ? this.diferencialService.update(this.id, formData)
      : this.diferencialService.create(formData);

    request.subscribe({
      next: () => {
        this.toastr.success(
          this.isEdit ? 'Diferencial atualizado com sucesso!' : 'Diferencial criado com sucesso!',
        );
        this.router.navigate(['/admin/manage-diferenciais']);
      },
      error: err => {
        if (err.status === 400 || err.status === 422) {
          this.toastr.error('Preencha todos os campos obrigatórios.');
        } else {
          this.toastr.error('Erro ao salvar o diferencial.');
        }
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
