<template>
<div>
  logout
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import { useToast } from '@/composables'
import { storageService } from '@/services'

export default defineComponent({
  name: 'LogoutView',

  setup () {
    const router = useRouter()
    const { $toast } = useToast()

    $toast.open({
      message: 'La sessión se ha cerrado',
      type: 'warning'
    })

    storageService.purgeSession()
    router.push('/')
  }
})
</script>
