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

btnAdd.addEventListener("click", () => {
    const cloneModal = templateModalStudent.content.cloneNode(true)
    container.prepend(cloneModal)
})

container.addEventListener("click", ev => {
    const btnClose = ev.target.closest(".btn-close-modal")
    const thisModal = ev.target.closest(".modal")

    if (btnClose) {
        thisModal.remove()
    }

    const btnSave = ev.target.closest(".btn-save")
    if (btnSave) {
        const form = thisModal.querySelector("form")
        forms = new FormData(form)

        forms.forEach(value => {
            console.log(value);
        })
        if (forms.get("name").trim() != ""){
            alert(`${forms.get("name")} cadastrado com sucesso!`)
        }
        
    }

})

