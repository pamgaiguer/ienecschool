import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MetodologiasService } from './metodologias.service';

@Component({
  selector: 'app-metodologia-form',
  templateUrl: './metodologias-form.component.html',
  standalone: false,
})
export class MetodologiasFormComponent implements OnInit {
  form!: FormGroup;
  isEdit: boolean = false;
  id!: number;
  imagemPreview: string | ArrayBuffer | null = null;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private metodologiaService: MetodologiasService,
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
        this.metodologiaService.getById(this.id).subscribe(Metodologia => {
          this.form.patchValue({
            titulo: Metodologia.titulo,
            descricao: Metodologia.descricao,
          });
          this.imagemPreview = Metodologia.imagem;
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
      ? this.metodologiaService.update(this.id, formData)
      : this.metodologiaService.create(formData);

    request.subscribe({
      next: () => {
        this.toastr.success(
          this.isEdit ? 'Metodologia atualizado com sucesso!' : 'Metodologia criado com sucesso!',
        );
        this.router.navigate(['/admin/manage-metodologias']);
      },
      error: err => {
        if (err.status === 400 || err.status === 422) {
          this.toastr.error('Preencha todos os campos obrigatórios.');
        } else {
          this.toastr.error('Erro ao salvar a Metodologia.');
        }
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
