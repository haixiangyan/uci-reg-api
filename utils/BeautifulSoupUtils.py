import re


def find_next_siblings_until(current_node, name, attrs, exclude):
    if exclude is None or len(exclude) == 0:
        raise Exception("Condition can't be empty!")

    siblings = []
    next_sibling = current_node

    print(exclude)

    while True:
        next_sibling = next_sibling.find_next_sibling()

        if next_sibling is None:
            return siblings

        # Exclude
        for key in exclude:
            if key in next_sibling.attrs and next_sibling[key] == exclude[key]:
                return siblings

        # Include
        for key in attrs:
            if next_sibling.tag != name:
                continue
            if key in next_sibling.attrs and next_sibling[key] == attrs[key]:
                siblings.append(next_sibling)

