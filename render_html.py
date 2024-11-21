from jinja2 import Environment, FileSystemLoader
import os
file_loader = FileSystemLoader(['..','.'])
env =  Environment(loader=file_loader)


def render():
    template = env.get_template('templates/form.html')
    output = template.render()

    with open('ouput/form_output.html', 'w') as f:
                f.write(output)