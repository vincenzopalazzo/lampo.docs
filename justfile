CC := "bun"

ARGS := ""

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
