"""
To find next siblings with conditions (include) and stop by conditions (stop_at)
@:param current_node: Current node
@:param name current: Node tag name
@:param include siblings: That have such conditions
@:param stop_at: The limit condition for finding siblings
"""


def find_next_siblings_until(current_node, name, include, stop_at):
    if stop_at is None or len(stop_at) == 0:
        raise Exception("Condition can't be empty!")

    siblings = []
    next_sibling = current_node

    while True:
        next_sibling = next_sibling.find_next_sibling()

        if next_sibling is None:
            return siblings

        # Exclude
        for key in stop_at:
            if key in next_sibling.attrs and next_sibling.attrs[key] == stop_at[key]:
                return siblings

        # Include
        for key in include:
            if next_sibling.name != name:
                continue
            if key in next_sibling.attrs and next_sibling.attrs[key] == include[key]:
                siblings.append(next_sibling)
