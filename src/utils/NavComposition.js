import { onMounted } from '@vue/composition-api'
import { useState, useGetters, useActions } from 'vuex-composition-helpers';
const useCounter = () => {
		const { show } = useState(['show']);
		const { total } = useGetters(['total']);
		const { CHANGE_SHOW } = useActions(['CHANGE_SHOW']);
    onMounted(() => {
      console.log('Composition mounted')
    })
    return {
      show,
      total,
      CHANGE_SHOW
    }
};

export default useCounter