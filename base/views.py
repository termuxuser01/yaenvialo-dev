from django.shortcuts import render, redirect
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse #HttpResponseRedirect 
from .forms import contactForm


# Create your views here.
def index(req):
	if(req.method == 'Get'):
		form = contactForm()
	else:
		form = contactForm(req.POST)
		if form.is_valid():
			subject = form.cleaned_data['subject']
			from_email = form.cleaned_data['from_email']
			name = form.cleaned_data['name']
			message = form.cleaned_data['message'] + " Enviado por el cliente: " + name + 'del correo' + from_email
			try:
				send_mail(subject, message, 'admin@yaenvialo.com', ['clientes@yaenvialo.com'])
			except BadHeaderError:
				return HttpResponse('Invalid Header found.')
			return redirect('success')

	return render(req, "index.html", {"form": form})

def blog(req):
	return render(req, "post-single.html")

def typography(req):
	return render(req, "typography.html")

def success(req):
	return render(req, "success.html")