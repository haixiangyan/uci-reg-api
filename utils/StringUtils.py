import re


def clean_str(string):
    return str(re.sub(r"\\n|\\t| |\s", '', string))
