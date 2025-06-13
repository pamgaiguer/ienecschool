import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeCarrosselService } from './home-carrossel.service';

@Component({
  selector: 'app-home-carrossel-form',
  templateUrl: './home-carrossel-form.component.html',
  standalone: false,
})
export class HomeCarrosselFormComponent implements OnInit {
  form!: FormGroup;
  isEdit: boolean = false;
  id!: number;
  imagemPreview: string | ArrayBuffer | null = null;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private carrosselHomeService: HomeCarrosselService,
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
        this.carrosselHomeService.getById(this.id).subscribe(Carrossel => {
          this.form.patchValue({
            titulo: Carrossel.titulo,
            descricao: Carrossel.descricao,
          });
          this.imagemPreview = Carrossel.imagem;
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
      ? this.carrosselHomeService.update(this.id, formData)
      : this.carrosselHomeService.create(formData);

    request.subscribe({
      next: () => {
        this.toastr.success(
          this.isEdit ? 'Carrossel da Home atualizado com sucesso!' : 'Carrossel da Home criado com sucesso!',
        );
        this.router.navigate(['/admin/home-banner']);
      },
      error: err => {
        if (err.status === 400 || err.status === 422) {
          this.toastr.error('Preencha todos os campos obrigatórios.');
        } else {
          this.toastr.error('Erro ao salvar a imagem para o carrossel');
        }
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
