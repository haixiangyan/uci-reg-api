def find_next_siblings_until(current_node, name, include, limit):
    if limit is None or len(limit) == 0:
        raise Exception("Condition can't be empty!")

    siblings = []
    next_sibling = current_node

    while True:
        next_sibling = next_sibling.find_next_sibling()

        if next_sibling is None:
            return siblings

        # Exclude
        for key in limit:
            if key in next_sibling.attrs and next_sibling.attrs[key] == limit[key]:
                return siblings

        # Include
        for key in include:
            if next_sibling.name != name:
                continue
            if key in next_sibling.attrs and next_sibling.attrs[key] == include[key]:
                siblings.append(next_sibling)
