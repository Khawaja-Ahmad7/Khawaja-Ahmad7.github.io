import PyPDF2
with open('Ahmad Bilal Resume.pdf', 'rb') as file:
    reader = PyPDF2.PdfReader(file)
    for page in reader.pages:
        print(page.extract_text())
