import { Form, Formik } from "formik";
import Button, { VARIANT } from "src/components/Button";
import TextArea from "src/components/FormComponent/TextArea";
import TextInput from "src/components/FormComponent/TextInput";
import GoogleMapComponent from "src/components/Map";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

const ContactBlock = () => {
  return (
    <div className="relative" id="contact-block">
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          window.alert(`Form submitted! for ${values?.name}`);
        }}
      >
        <Form className="sm:relative z-[100] flex justify-center sm:py-[100px] pointer-events-none">
          <div className="bg-primary/80 sm:rounded-lg w-full sm:w-[330px] shadow-panel pointer-events-auto px-6 py-8 space-y-4 text-center">
            <p className="text-white font-bold text-[36px] ">Contact</p>

            <TextInput
              name="name"
              containerClassName="mt-6"
              className="text-center"
              placeholder="Your name"
            />

            <TextInput
              name="email"
              type="email"
              className="text-center"
              placeholder="Your email"
            />

            <TextInput
              name="subject"
              className="text-center"
              placeholder="Subject"
            />

            <TextArea
              name="message"
              placeholder="Message"
              classNames="text-center"
            />

            <Button
              type="submit"
              variant={VARIANT.SUBMIT}
              className="mt-2 w-full text-sm"
            >
              Send
            </Button>
          </div>
        </Form>
      </Formik>

      <GoogleMapComponent className="sm:absolute h-[300px] sm:h-full sm:top-0" />
    </div>
  );
};

export default ContactBlock;
