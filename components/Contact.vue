<template>
    <div id="Contact" class="bg-light">
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div id="liveAlertPlaceholder"></div>
        <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 mb-3">Get started with a free consultation and estimate.</h1>
            <p class="col-lg-10 fs-4">Fill out the form below to schedule a FREE consultation with one of our Virtual Tour Experts.</p>
        </div>
        <div class="col-md-10 mx-auto col-lg-5">
            <form class="p-4 p-md-5 border rounded-3 bg-light" @submit.prevent="handleSubmit">
            <div class="form-floating mb-3">
                <input v-model="form.name" class="form-control" id="fullname" placeholder="Full name">
                <label for="fullname">Name</label>
            </div>
                
            <div class="form-floating mb-3">
                <input v-model="form.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input v-model="form.phone" class="form-control" id="floatingPassword" placeholder="Phone number">
                <label for="floatingPassword">Phone number</label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit" :disabled="isLoading">
                <span v-if="isLoading">Loading...</span>
                <span v-else>Submit</span>
            </button>
            <hr class="my-4">
            <small class="text-muted">By clicking Contact, you agree to be contacted by our virtual tour experts.</small>
            </form>
        </div>
        </div>
        </div>
    </div>
    
</template>

<script setup>



const form = reactive({
    name: null,
    email: null,
    phone: null
})

const isLoading = ref(false)


const handleSubmit = async () => {
    if (isLoading.value) return;
    isLoading.value = true
    try {
        await submitForm(form.email, form.name, form.phone)
        const alert = (message, type) => {
        const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')

        alertPlaceholder.append(wrapper)
        }
        isLoading.value = false
        
        alert('Successfully submitted contact information.', 'success')

        form.name = null;
        form.email = null;
        form.phone = null;
    } catch (e) {
        console.error(e)
    }
}


</script>