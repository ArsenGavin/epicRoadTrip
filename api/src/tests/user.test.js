const chai = require("chai")
const { expect } = require("chai")
const chaiHttp = require("chai-http")
const server = require("../../index")

chai.use(chaiHttp)

describe("User Tests", () => {
  // eslint-disable-next-line no-unused-vars
  let JWT = ""

  before("Logging to get valid JWT", (done) => {
    const email = "bonjour@test.fr"
    const password = "bonjour"
    chai
      .request(server)
      .post("/users/login")
      .send({ email, password })
      .end((err, res) => {
        if (err) return done(err)
        JWT = res.body.authorization
        done()
      })
  })
  describe("Create user", () => {
    it("should successfully create a user", (done) => {
      const user = {
        email:
          new Date().getDay() +
          "a" +
          new Date().getMinutes() +
          new Date().getSeconds() +
          "ablablatest@test.fr",
        login:
          "test" +
          new Date().getDay() +
          "a" +
          new Date().getMinutes() +
          new Date().getSeconds(),
        password: "bonjour",
        isAdmin: false,
        registrationDate: Date.now(),
      }
      chai
        .request(server)
        .post("/users")
        .send({ user })
        .end((err, res) => {
          if (err) return done(err)
          expect(res.status).to.equal(201)
          done()
        })
    })
  })

  describe("Login user", () => {
    it("should successfully login a user", (done) => {
      const email = "bonjour@test.fr"
      const password = "bonjour"
      chai
        .request(server)
        .post("/users/login")
        .send({ email, password })
        .end((err, res) => {
          if (err) return done(err)
          expect(res.status).to.equal(200)
          expect(res.body.authorization).to.be.a("string")
          expect(res.body.authorization).to.have.string("ey")
          done()
        })
    })

    it("should not login with bad credentials", (done) => {
      const email = "bonjour@test.fr"
      const password = "fakepassword"
      chai
        .request(server)
        .post("/users/login")
        .send({ email, password })
        .end((err, res) => {
          if (err) return done(err)
          expect(res.status).to.equal(401)
          expect(res.body.error).to.equal("Invalid email or password")
          done()
        })
    })
  })

  describe("Login with Oauth 3rd party", () => {
    it("should successfully login or create a user (facebook)", (done) => {
      const email =
        new Date().getDay() +
        "test" +
        new Date().getMinutes() +
        "bonjour@test.fr"
      const name =
        new Date().getDay() + "test" + new Date().getMinutes() + "fbbonjour"
      const id =
        new Date().getDay() + "test" + new Date().getMinutes() + "facebook"
      chai
        .request(server)
        .post("/users/facebook")
        .send({ email, name, id })
        .end((err, res) => {
          if (err) return done(err)
          expect(res.status).to.equal(200)
          expect(res.body.authorization).to.be.a("string")
          expect(res.body.authorization).to.have.string("ey")
          done()
        })
    })

    it("should successfully login or create a user (google)", (done) => {
      const email =
        new Date().getDay() +
        "test" +
        new Date().getMinutes() +
        "bonjour@test.fr"
      const name =
        new Date().getDay() + "test" + new Date().getMinutes() + "gbonjour"
      const id =
        new Date().getDay() + "test" + new Date().getMinutes() + "google"
      chai
        .request(server)
        .post("/users/google")
        .send({ email, name, id })
        .end((err, res) => {
          if (err) return done(err)
          expect(res.status).to.equal(200)
          expect(res.body.authorization).to.be.a("string")
          expect(res.body.authorization).to.have.string("ey")
          done()
        })
    })
  })

  describe("Get all users", () => {
    it("should return users.toPublic()", (done) => {
      chai
        .request(server)
        .get("/users/?page=1&limit=10")
        .end((err, res) => {
          if (err) return done(err)
          expect(res.status).to.equal(200)
          expect(res.body.users).to.be.an("array")
          expect(res.body.users[0]).to.have.property("email")
          expect(res.body.users[0]).to.have.property("login")
          expect(res.body.users[0]).to.have.property("registrationDate")
          expect(res.body.users[0]).to.have.property("roadtrips")
          done()
        })
    })
  })

  describe("Update a user", () => {
    it("should return the updated user", (done) => {
      chai
        .request(server)
        .put("/users/60c37daf97b427d41563a3ba")
        .set("authorization", JWT)
        .end((err, res) => {
          if (err) return done(err)
          expect(res.status).to.equal(500)
          expect(res.error.text).to.equal("User id or user attributes are missing")
          done()
        })
    })
  })


  describe("Update favorites", () => {
    it("should return the updated list of favorites (ADD)", (done) => {
      const fav = {
        category: "enjoy",
        address:"102 avenue Joffre, 93800 Epinay sur seine France",
        apiId: "13913154",
        latitude: 48.960835,
        longitude: 2.297573,
        description:"",
        name: "Eglise Notre Dame des Missions",
        photo: "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/f2/7e/6e/eglise-notre-dame-des.jpg",
        website: "http://www.amisndmissions.fr/ANDM/Accueil.html",
      }
      chai
        .request(server)
        .put("/users/60c37daf97b427d41563a3ba/favorites")
        .send({
          activity: fav,
          direction: "ADD"
        })
        .set("authorization", JWT)
        .end((err, res) => {
          if (err) return done(err)
          expect(res.status).to.equal(200)
          expect(res.body).to.be.an("array")
          done()
        })
    })

    it("should return the updated list of favorites (REMOVE)", (done) => {
      const fav = {
        category: "enjoy",
        address:"102 avenue Joffre, 93800 Epinay sur seine France",
        apiId: "13913154",
        latitude: 48.960835,
        longitude: 2.297573,
        description:"",
        name: "Eglise Notre Dame des Missions",
        photo: "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/f2/7e/6e/eglise-notre-dame-des.jpg",
        website: "http://www.amisndmissions.fr/ANDM/Accueil.html",
      }
      chai
        .request(server)
        .put("/users/60c37daf97b427d41563a3ba/favorites")
        .send({
          activity: fav,
          direction: "REMOVE"
        })
        .set("authorization", JWT)
        .end((err, res) => {
          if (err) return done(err)
          expect(res.status).to.equal(200)
          expect(res.body).to.be.an("array")
          done()
        })
    })
  })
})
