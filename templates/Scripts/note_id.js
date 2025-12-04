function noteIdFunc(title) {
    // Create note IDs in a Zettelkasten format with a timestamp and a suffix.
    // Example: "1657296016-my-new-note"
    let suffix = "";

    if (title !== undefined && title !== null) {
        // Transform title into valid filename
        suffix = title
            .replace(/ /g, "-")              // replace spaces with hyphens
            .replace(/[^A-Za-z0-9-]/g, "")   // remove invalid characters
            .toLowerCase();
    } else {
        // If no title, use 4 random uppercase letters
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < 4; i++) {
            suffix += letters[Math.floor(Math.random() * letters.length)];
        }
    }

    // Use UNIX timestamp (seconds) like Lua's os.time()
    const timestamp = Math.floor(Date.now() / 1000);

    return `${timestamp}-${suffix}`;
}

module.exports = noteIdFunc;
