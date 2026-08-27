const previews = {
    diary: {
        title: "diary",
        text: "thoughts, little moments, and things I want to remember."
    },

    photos: {
        title: "photos",
        text: "photographs, places, and little moments."
    },

    books: {
        title: "books",
        text: "books I'm reading, loving, and collecting."
    },

    music: {
        title: "music",
        text: "songs, albums, and things I've been listening to."
    },

    videos: {
        title: "videos",
        text: "YouTube videos, films, and things I've been watching."
    },

    runs: {
        title: "runs",
        text: "running, walks, and movement."
    },

    archive: {
        title: "archive",
        text: "weekly and monthly edits of life lately."
    }
};


const previewBox = document.createElement("div");

previewBox.className = "page-preview";

document.body.appendChild(previewBox);


document.querySelectorAll(".emoji-link").forEach(link => {

    link.addEventListener("mouseenter", () => {

        const section = link.dataset.preview;

        previewBox.innerHTML = `
            <div class="preview-title">
                ${previews[section].title}
            </div>

            <div class="preview-text">
                ${previews[section].text}
            </div>

            <div class="preview-hint">
                click to enter →
            </div>
        `;

        previewBox.classList.add("show");

    });


    link.addEventListener("mousemove", (event) => {

        previewBox.style.left = `${event.clientX + 20}px`;
        previewBox.style.top = `${event.clientY + 20}px`;

    });


    link.addEventListener("mouseleave", () => {

        previewBox.classList.remove("show");

    });

});
