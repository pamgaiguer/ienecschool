import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SegmentoService } from './segmentos-ensino.service';

@Component({
  selector: 'app-segmentos-form',
  templateUrl: './segmentos-ensino-form.component.html',
  standalone: false,
})
export class SegmentosFormComponent implements OnInit {
  form!: FormGroup;
  isEdit: boolean = false;
  id!: number;
  imagemPreview: string | ArrayBuffer | null = null;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private segmentoService: SegmentoService,
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
        this.segmentoService.getById(this.id).subscribe(Segmento => {
          this.form.patchValue({
            titulo: Segmento.titulo,
            descricao: Segmento.descricao,
          });
          this.imagemPreview = Segmento.imagem;
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
      ? this.segmentoService.update(this.id, formData)
      : this.segmentoService.create(formData);

    request.subscribe({
      next: () => {
        this.toastr.success(
          this.isEdit ? 'Segmento atualizado com sucesso!' : 'Segmento criado com sucesso!',
        );
        this.router.navigate(['/admin/manage-segmentos']);
      },
      error: err => {
        if (err.status === 400 || err.status === 422) {
          this.toastr.error('Preencha todos os campos obrigatórios.');
        } else {
          this.toastr.error('Erro ao salvar o Segmento.');
        }
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
