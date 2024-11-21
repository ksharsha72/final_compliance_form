import asyncio
from playwright.async_api import async_playwright


async def html_to_pdf(html_content, output_path):
    import asyncio
    from playwright.async_api import async_playwright

    import base64

    def convert_image_to_base64(path):
        with open(path, 'rb') as image_file:
            return base64.b64encode(image_file.read()).decode('utf-8')

    header_base64 = convert_image_to_base64("static/header.png")
    footer_base64 = convert_image_to_base64("static/footer.png")



    header_template=f"""

            <div style="margin-left:10px";margin-right:"10px";>
                <img src="data:image/png;base64,{header_base64}" style=' width: 100%; height: 80%; margin: 0;'/>
            </div>
                
            """
    
    footer_template=f"""

            <div style="margin-left:10px";margin-right:"10px";>
          
                <img src="data:image/png;base64,{footer_base64}" style=' width: 100%; height: 80%; margin: 0;'/>

            </div>
                
            """


    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.set_content(html_content)
        await page.add_style_tag(path='static/form.css')
        await page.add_style_tag(url= 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css')
        await page.add_script_tag(url= 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')
        await page.emulate_media(media="print")
        await page.pdf(path= output_path,print_background=True ,prefer_css_page_size= False,format="A4",
                       header_template=header_template,footer_template=footer_template,scale=0.5,
                       display_header_footer=True,margin={"top": "100px", "bottom": "100px", "left": "50px", "right": "50px"},)

        print("the pdf has been generated")
        await browser.close()

# html_content = '''
# <!DOCTYPE html>
# <html lang="en">  
# <head>
#     <meta charset="UTF-8">
#     <meta name="viewport" content="width=device-width, initial-scale=1.0">
#     <title>Sample HTML</title>
# </head>
# <body>
#     <h1>Hello, World!</h1>
#     <p>This is a sample HTML content to be converted to PDF.</p>
# </body>
# </html>
# '''

def generate_pdf(html_file,output_path):

    import asyncio
    from playwright.async_api import async_playwright

    with open(html_file, 'r', encoding='utf-8') as f:
        html_content = f.read()

    print(html_content)
    print(output_path)
    output_path = output_path + ".pdf"
    asyncio.run(html_to_pdf(html_content, output_path))