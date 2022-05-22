const maskedElements = document.querySelectorAll("[data-enrollment-mask")

const fnMasks = {
    enrollment: maskEnrollment
}

maskedElements.forEach(el => {
    const maskName = el.dataset.enrollmentMask
    const fnMask = fnMasks[maskName]
    fnMask(el)
})

function maskEnrollment(el) {
    el.addEventListener("keydown", ev => {
        const key = ev.key
        if (key == "a") {
            ev.preventDefault()
        }
    });
}

const container = document.querySelector(".container-data")
const templateModalStudent = document.querySelector("template.student")
const actionBar = document.querySelector(".action-bar")
const btnAdd = actionBar.querySelector(".btn-add")
const btnSearch = document.querySelector(".btn-search")

container.addEventListener("click", ev => {
    const btnClose = ev.target.closest(".btn-close-modal")
    const thisModal = ev.target.closest(".modal")

    if (btnClose) {
        thisModal.style.opacity = ".5"
        thisModal.style.transition = "all 5s"
        thisModal.remove()
    }

    const btnSave = ev.target.closest(".btn-save")

    if (btnSave) {
        const form = thisModal.querySelector("form")
        thisForm = new FormData(form)

        const name = thisForm.get("name")

        thisForm.forEach(value => {
            console.log(value);
        })
        if (name.trim() != "") {
            alert(`${name} cadastrado com sucesso!`)
        }
    }

})

btnAdd.addEventListener("click", () => {
    const cloneModal = templateModalStudent.content.cloneNode(true)
    container.prepend(cloneModal)
})


