setup:
	pyenv virtualenv 3.11.4 jupyterlite
	pyenv local jupyterlite
	pip install -r requirements.txt

build:
	jupyter lite build --contents content
start: build
	caddy file-server --root _output
