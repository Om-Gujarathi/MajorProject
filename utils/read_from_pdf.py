import PyPDF2

key = '/Annots'
uri = '/URI'
ank = '/A'

def get_resume_text_and_links(filename):
    pdf_file = open(filename, 'rb')
    pdf = PyPDF2.PdfReader(pdf_file)
    pages = len(pdf.pages)
    text = ""
    links = []
    for page in range(pages):
        text += pdf.pages[page].extract_text()
        pageSliced = pdf.pages[page]
        pageObject = pageSliced.get_object()
        if key in pageObject.keys():
            ann = pageObject[key]
            for a in ann:
                u = a.get_object()
                if uri in u[ank].keys():
                    links.append(u[ank][uri])

    pdf_file.close()
    return text, links
