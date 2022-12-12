from django import forms

class contactForm(forms.Form):
	name = forms.CharField(required=True)
	from_email = forms.EmailField(required=True)
	subject = forms.CharField(required=True)
	message = forms.CharField(widget=forms.Textarea, required=True)

	from_email.widget.attrs.update({
		'class': 'form-control',
		'placeholder': 'Correo',
		'id': 'email',
		'oninvalid': 'this.setCustomValidity(\'Favor ingresa tu correo.\')'
		})
	subject.widget.attrs.update({
		'class': 'form-control',
		'placeholder': 'Asunto',
		'id': 'subject',
		'oninvalid': 'this.setCustomValidity(\'Favor ingresa un asunto.\')'
		})

	name.widget.attrs.update({
		'class': 'form-control',
		'placeholder': 'Favor ingresa tu nombre',
		'id': 'name',
		'oninvalid': 'this.setCustomValidity(\'Favor ingresa tu nombre.\')'
		})

	message.widget.attrs.update({
		'class': 'form-control',
		'placeholder': 'Escribe aqui tu mensaje',
		'id': 'message',
		'oninvalid': 'this.setCustomValidity(\'Favor ingresa un mensaje.\')'
		})
