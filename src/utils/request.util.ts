interface RequestUtil {
  action: ({ payload }: {payload: any}) => Promise<any>
  payload?: any
  loader?: (value: boolean) => void
  resolve?: (value: any) => void
  reject?: (value: any) => void
}

/**
 * @returns {Promise<any>} action promise
 */
export const requestUtil = async ({
  action,
  payload,
  loader,
  resolve,
  reject
}: RequestUtil): Promise<any> => {
  try {
    loader?.(true)
    const response = await action({ ...payload })

    resolve?.(response)
  } catch (e) {
    if (!reject && e.response?.status !== 422) {
      console.error('error', e)
      /* this.$notify.error({
        message: this.$t('notify.error')
      }) */
    }

    reject?.(e)
  } finally {
    loader?.(false)
  }
}
