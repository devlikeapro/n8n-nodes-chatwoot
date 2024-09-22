import {ChatWoot} from "./ChatWoot.node";

test("smoke", () => {
    const node = new ChatWoot()
    expect(node.description.properties).toBeDefined()
})
