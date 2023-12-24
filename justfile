CC := "bun"

default:
	{{CC}} run start

dep:
    {{CC}} install

dev:
    {{CC}} --bun run dev

check:
	{{CC}} run check

clean:
	{{CC}} clean

build:
    {{CC}} run build

deploy args="": build
    {{CC}} run netlify deploy {{args}}
