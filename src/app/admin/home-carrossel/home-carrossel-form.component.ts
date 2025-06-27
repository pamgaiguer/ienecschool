import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeCarroselService } from './home-carrossel.service';

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
    private hCarrosselService: HomeCarroselService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      imagem: [null],
      ativo: [false],
      ordem: [false],
    });

    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.isEdit = true;
        this.id = +idParam;
        this.hCarrosselService.getById(this.id).subscribe(hCarrossell => {
          this.form.patchValue({
            ativo: hCarrossell.ativo,
            ordem: hCarrossell.ordem,
          });
          this.imagemPreview = hCarrossell.imagem;
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
    formData.append('ativo', String(this.form.value.ativo));
    formData.append('ordem', String(this.form.value.ordem));

    if (this.form.value.imagem) {
      formData.append('imagem', this.form.value.imagem);
    }

    const request = this.isEdit
      ? this.hCarrosselService.update(this.id, formData)
      : this.hCarrosselService.create(formData);

    request.subscribe({
      next: () => {
        this.toastr.success(
          this.isEdit ? 'Carrossel da Home atualizado com sucesso!' : 'Carrossel da Home criado com sucesso!',
        );
        this.router.navigate(['/admin/home-carrossel']);
      },
      error: err => {
        if (err.status === 400 || err.status === 422) {
          this.toastr.error('Preencha todos os campos obrigatórios.');
        } else {
          this.toastr.error('Erro ao salvar a imagem para o banner');
        }
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
