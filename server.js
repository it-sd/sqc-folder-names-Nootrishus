function newFolderName(folderNames) {

    let largestIndex = 0;
    for (let i = 0; i < folderNames.length; i++) {
        const folderName = folderNames[i];
        if (folderName.startsWith("New Folder")) {
            const indexString =folderName.replace("NewFolder", "").trim();
            if (!isNaN(indexString)) {
                const index = parseInt(indexString);
                largestIndex = Math.max(largestIndex, index);
            }
        }
    }
    if (largestIndex === 0) {
        return "New Folder";
    } else {
        return "New Folder" + (largestIndex + 1);
    }
}
