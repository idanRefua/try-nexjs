import { motion } from "framer-motion";
import Image from "next/image";
function About() {
  return (
    <div className="about-body">
      <h1 className="d-flex align-items-center justify-content-center about-title">
        About us
      </h1>
      <br />
      <div className="row">
        <section className="col-sm-6 my-self ">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.55,
                },
              },
            }}
            className="mb-3"
          >
            <h3 className="about-sub-title d-flex align-items-center justify-content-center">
              Who am i ?
            </h3>
            <br />
            <Image
              src={"/images/happy-g2629bfab0_1920.jpg"}
              width={200}
              height={200}
              className="rounded mx-auto d-block"
            ></Image>
            <p>
              Maecenas ut velit tellus. Pellentesque finibus tortor eu nisi
              sollicitudin, eget dictum quam blandit. Nunc aliquet interdum
              enim, ac gravida enim cursus at. Ut auctor quam sit amet rhoncus
              ultrices. Duis ac iaculis libero. Maecenas sit amet elementum leo.
              Proin est tortor, placerat a porttitor vitae, bibendum ut sem.
              Quisque laoreet gravida erat eget feugiat. In congue, mauris a
              posuere cursus, sapien massa tristique felis, et luctus ex arcu
              eget felis. Nunc pellentesque velit at diam placerat, non
              convallis est ullamcorper. Donec ut neque et nisi blandit aliquet
              quis sit amet nisi. Sed et maximus mi. Nunc massa sem, posuere
              quis lacus sit amet, volutpat maximus arcu. Suspendisse laoreet
              purus in augue gravida venenatis. Vestibulum at dolor ac nisi
              facilisis fermentum. Donec facilisis ut lacus iaculis imperdiet.
              Cras eu sapien lacus. Suspendisse vulputate tellus ut ultricies
              efficitur. Quisque non lectus sit amet ante mollis dapibus. Duis
              vitae pellentesque tortor. Proin finibus lobortis ipsum sit amet
              venenatis. Nunc a lacus cursus, volutpat tellus ac, semper mi.
              Proin non ex pulvinar, venenatis velit non, aliquet arcu. Maecenas
              dignissim rutrum malesuada. Integer sit amet erat eleifend,
              finibus est id, pellentesque dui. Cras sit amet pharetra purus.
              Proin interdum mi sed congue viverra. Etiam a suscipit ex. Nullam
              posuere varius risus, vel tempus dui facilisis ac. Aenean rhoncus
              eros nec rhoncus congue. Cras vitae tellus turpis. Donec at dolor
              eget tellus blandit imperdiet. Phasellus eu erat eu lectus
              tristique lacinia. Maecenas auctor volutpat vestibulum.
              Suspendisse placerat leo quis est vulputate, at bibendum tortor
              placerat. In id lorem ac turpis feugiat faucibus. Nullam tempor
              commodo nulla, quis bibendum quam lobortis et. Integer eu maximus
              eros. Maecenas nisi mi, pulvinar sed consectetur sed, consectetur
              eget eros. Donec feugiat tortor eget ultricies aliquet. Fusce
              risus quam, lobortis vitae leo ac, lacinia sodales dolor. Aliquam
              ac leo elit.
            </p>
          </motion.div>
        </section>
        <section className="col-sm-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.63,
                },
              },
            }}
            className="mb-3"
          >
            <h3 className="about-sub-title d-flex align-items-center justify-content-center">
              Our Location{" "}
            </h3>
            <br />
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27015.30120336615!2d34.903248762928136!3d32.17963011706316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d39b32151955f%3A0x8e50c5f354fa376a!2sKefar%20Sava!5e0!3m2!1sen!2sil!4v1672665314789!5m2!1sen!2sil"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

            <p></p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default About;
