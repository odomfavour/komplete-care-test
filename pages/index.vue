<template>
  <div class="container-fluid">
    <h1 class="text-primary">Update Patient Medical Record</h1>
    <p class="text-mild">
      Click the tabs to view and edit patient medical details
    </p>
    <b-card class="px-2 px-md-5 px-lg-5 my-5">
      <b-form @submit.prevent="addMedicalRecord">
        <h5 class="mt-4 text-primary">X-Ray</h5>
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-12 mb-3"
            v-for="(sign, index) in investigations"
            :key="sign.id"
          >
            <b-form-group>
              <b-form-checkbox-group
                id="checkbox-1"
                :name="`checkbox-${index}`"
                v-model="selections"
              >
                <b-form-checkbox :value="sign.id">{{
                  sign.title
                }}</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
          </div>
        </div>
        {{ selections }}
        <hr />
        <h5 class="mt-4 text-primary">Ultrasound Scan</h5>
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-12 mb-3"
            v-for="(sign, index) in 6"
            :key="index"
          >
            <b-form-checkbox
              id="checkbox-1"
              :name="`checkbox-${index}`"
              value="accepted"
            >
              Abdomen
            </b-form-checkbox>
          </div>
        </div>
        <hr class="my-3" />
        <div class="row">
          <div class="col-md-6 mb-3">
            <b-form-group
              id="input-group-1"
              label="CT Scan"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="ctScan"
                type="text"
                placeholder="Enter CT Scan"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 mb-3">
            <b-form-group
              id="input-group-mri"
              label="MRI"
              label-for="input-mri"
            >
              <b-form-input
                id="input-mri"
                v-model="mri"
                type="text"
                placeholder="Enter mri"
                required
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="d-flex mt-3 justify-content-end">
          <button class="btn btn-primary" type="submit">Save and Send</button>
          <!-- <button class="btn btn-primary" @click="getUser">
            getUser
          </button> -->
        </div>
      </b-form>
    </b-card>
    <b-modal id="modal-success" title="Success" centered size="sm" hide-footer>
      <div class="text-center">
        <b-icon icon="check-circle-fill" variant="success" font-scale="7.5"></b-icon>
      </div>
      <p class="my-4">Medical record added successfully</p>
    </b-modal>
    <b-modal id="modal-error" title="Error" centered size="sm" hide-footer>
      <div class="text-center">
        <b-icon icon="exclamation-triangle-fill" variant="danger" font-scale="7.5"></b-icon>
      </div>
      <p class="my-4">{{ error }}</p>
    </b-modal>
    <b-modal id="modal-alert" title="Alert" centered size="sm" hide-footer>
      <div class="text-center">
        <b-icon icon="exclamation-lg" variant="warning" font-scale="7.5"></b-icon>
      </div>
      <p class="my-4">{{ alert }}</p>
    </b-modal>
  </div>
</template>

<script>
// import gql from 'graphql-tag'
import login from "~/graphql/mutations/login.gql";
import me from "~/graphql/query/me.gql";
import investigationsQuery from "~/graphql/query/investigations.gql";
import addMedicalRecordQuery from "~/graphql/mutations/addMedicalRecord.gql";
export default {
  name: "IndexPage",
  layout: "dashboard",
  data() {
    return {
      selections: [],
      ctScan: "",
      mri: "",
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      investigations: [],
      me: {
        name: "Chinwe",
      },
      error: "",
      alert: ""
    };
  },
  apollo: {
    investigations: {
      query: investigationsQuery,
      update(data) {
        this.investigations = data.investigations;
        console.log("investigations updated", this.investigations);
        return data.investigations;
      },
    },
  },
  methods: {
    async getUser() {
      try {
        const res = await this.$apollo
          .query({
            query: me,
          })
          .then((res) => console.log(res));
      } catch (e) {
        this.error = e;
        this.$bvModal.show("modal-error");
      }
    },
    async onSubmit() {
      try {
        const res = await this.$apollo
          .mutate({
            mutation: login,
            variables: {
              email: "tester@kompletecare.com",
              password: "password",
            },
          })
          .then((res) => console.log("res", res));
      } catch (e) {
        this.error = e;
        this.$bvModal.show("modal-error");
      }
    },
    async addMedicalRecord() {
      console.log("addMedicalRecord", {
        investigations: this.selections,
        ctScan: this.ctScan,
        mri: this.mri,
        developer: this.me.name,
      });
      if (this.investigations && this.ctScan && this.mri) {
        try {
          const res = await this.$apollo
            .mutate({
              mutation: addMedicalRecordQuery,
              variables: {
                investigation: this.investigations,
                ctscan: this.ctScan,
                mri: this.mri,
                developer: "Chinwe",
              },
            })
            .then((res) => {
              this.$bvModal.show("modal-success");
              console.log("res", res);
            });
        } catch (e) {
          this.error = e;
          this.$bvModal.show("modal-error");
        }
      } else {
        this.alert = 'Ensure to select the investigations';
        this.$bvModal.show("modal-alert");
      }
    },
  },
};
</script>
