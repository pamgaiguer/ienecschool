import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeBannerService } from './home-banner.service';

@Component({
  selector: 'app-home-banner-form',
  templateUrl: './home-banner-form.component.html',
  standalone: false,
})
export class HomeBannerFormComponent implements OnInit {
  form!: FormGroup;
  isEdit: boolean = false;
  id!: number;
  imagemPreview: string | ArrayBuffer | null = null;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private hBannerService: HomeBannerService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      imagem: [null],
      ativo: [false],
      usar_como_carrossel: [false],
    });

    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.isEdit = true;
        this.id = +idParam;
        this.hBannerService.getById(this.id).subscribe(hBanner => {
          this.form.patchValue({
            ativo: hBanner.ativo,
            usar_como_carrossel: hBanner.usar_como_carrossel,
          });
          this.imagemPreview = hBanner.imagem;
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
    formData.append('usar_como_carrossel', String(this.form.value.usar_como_carrossel));

    if (this.form.value.imagem) {
      formData.append('imagem', this.form.value.imagem);
    }

    const request = this.isEdit
      ? this.hBannerService.update(this.id, formData)
      : this.hBannerService.create(formData);

    request.subscribe({
      next: () => {
        this.toastr.success(
          this.isEdit ? 'Banner da Home atualizado com sucesso!' : 'Banner da Home criado com sucesso!',
        );
        this.router.navigate(['/admin/home-banner']);
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
