const About = () => {
  return (
    <div>
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About Me</h2>
            <p>
            I am a front-end web developer. I can provide clean code and pixel perfect design. 
            I also make the website more & more interactive with web animations.
            I can provide clean code and pixel perfect design
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="src/assets/img/mitch.jpeg"
                className="img-fluid"
                alt
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Front-End  Developer</h3>
              <p className="fst-italic">
              "Sebagai seorang Front End Developer, saya adalah arsitek visual digital yang berdedikasi untuk menciptakan pengalaman pengguna yang luar biasa. Dengan keterampilan mendalam dalam HTML, CSS, dan JavaScript, saya mewujudkan desain menjadi antarmuka yang dinamis dan responsif, menciptakan koneksi yang kuat antara pengguna dan aplikasi web."
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>ultah:</strong> <span>11 May 2003</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Website:</strong> <span>www.mit.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>nomor telepon:</strong>{" "}
                      <span>0821-8932-1340</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>kota:</strong> <span>Sarongsong 1, indonesia</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>umur:</strong> <span>20</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>sarjana:</strong>{" "}
                      <span>Sarjana Komputer (s1)</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>email:</strong> <span>student@unklab.ac.id</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Freelance:</strong> <span>tidak tersedia</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Saat saya terus menjelajahi lanskap teknologi yang selalu
                berkembang, saya merasakan kepuasan besar dalam menantang
                batasan-batasan pengembangan UI/UX dan frontend. Perjalanan saya
                melampaui kode; ini tentang menciptakan hubungan yang berarti
                antara pengguna dan produk digital. Dengan perpaduan kreativitas
                dan keahlian teknis, saya berkomitmen untuk membentuk masa depan
                pengalaman pengguna, memastikan bahwa setiap interaksi
                meninggalkan kesan yang abadi. Bergabunglah dalam petualangan
                menarik ini, di mana inovasi bertemu estetika, dan bersama-sama,
                kita dapat mendefinisikan ulang cara orang berinteraksi dengan
                dunia digital.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
    </div>
  );
};
export default About;
