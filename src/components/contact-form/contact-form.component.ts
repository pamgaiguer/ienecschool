import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  atendimentoEmail = 'atendimento@colegioienec.com';
  relacionamentoEmail = 'relacionamento@colegioienec.com';

  contactForm: FormGroup;

  constructor(
    private emailService: EmailService,
    private fb: FormBuilder,
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required],
    });
  }

  // onSubmit() {
  //   if (this.contactForm.valid) {
  //     this.emailService.sendEmail(this.contactForm.value).subscribe({
  //       next: () => alert('Email enviado com sucesso!'),
  //       error: () => alert('Erro ao enviar email. Tente novamente.'),
  //     });
  //   }
  // }

  onSubmit() {
    if (this.contactForm.valid) {
      // Envie os dados do formulário para o servidor
      console.log(this.contactForm.value);
      // Aqui você chamaria a função para enviar o email
    }
  }
}
