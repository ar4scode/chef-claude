import {useFormik} from "formik"
import * as Yup from "yup"

export const MainContent = () => {
  const formik = useFormik({
    initialValues: {
      ingredient: ""
    },
    validationSchema: Yup.object({
      ingredient: Yup.string()
        .required("Please Enter an Ingredient")
    }),
    onSubmit: (values) => {
      // create recipe
    }
  })

  return (
    <main>
      <form onSubmit={formik.handleSubmit}>
        <input type="text" onChange={formik.handleChange} placeholder="e.g. oregano" />
        <button type="submit">Add Ingredient</button>
      </form>

        {formik.touched.ingredient && formik.errors.ingredient ? (
          <div className="input-error">{formik.errors.ingredient}</div>
        ) : null}

    </main>
  )
}