build:
	uv run jupyter lite build --contents content
start: build
	caddy file-server --root _output --listen :3000
