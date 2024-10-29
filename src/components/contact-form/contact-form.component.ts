import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      name: [''],
      email: [''],
      phone: [''],
      message: [''],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.emailService.sendEmail(this.contactForm.value).subscribe({
        next: () => alert('Email enviado com sucesso!'),
        error: () => alert('Erro ao enviar email. Tente novamente.'),
      });
    }
  }
}
