<script setup>
import { useToast } from 'primevue/usetoast'
import { useField, useForm } from 'vee-validate'

const { handleSubmit } = useForm()
const { value, errorMessage } = useField('value', validateField)
const toast = useToast()
import Checkbox from 'primevue/checkbox'

function validateField(value) {
  if (!value) {
    return 'Accept is required.'
  }

  return true
}

const onSubmit = handleSubmit((values) => {
  if (values.value && values.value.length > 0) {
    toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 })
  }
})
</script>

<template>
  <div class="card flex justify-content-center">
    <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
      <label for="chbx">Vis kun specialproduktioner</label>
      <Checkbox
        id="chbx"
        v-model="value"
        :class="{ 'p-invalid': errorMessage }"
        binary
        aria-describedby="chbx-error"
      />
      <small class="p-error" id="chbx-error">{{ errorMessage || '&nbsp;' }}</small>
      <ButtonLibl type="submit" label="Submit" />
    </form>
    <ToastLibl />
  </div>
</template>
