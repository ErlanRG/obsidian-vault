<%*
let title = tp.file.title
if (title.startsWith("Untitled")) {
	title = await tp.system.prompt("Title")
}

let id = tp.user.note_id(title)

tR += '---'
%>
id: <%* tR += id %>
alias: <%* 
tR += title 
await tp.file.rename(id)
%>
tags:
links:
<%* tR += '---' %>