from jinja2 import Environment, FileSystemLoader

env = Environment(loader=FileSystemLoader('templates'))
templates = ['index.html', '404.html']

for template in templates:
    tmp = env.get_template(template)
    out = tmp.render()
    location = "C:\\Users\\Virginia\\Documents\\GitHub\\beet\\{}".format(template)
    with open(location, "w", encoding="utf-8") as f:
        f.write(out)
print("Listo")
