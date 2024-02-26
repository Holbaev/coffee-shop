<script>
import { updateProducts } from "../../shared/service/productsService";
import Layout from "../../widgets/Layout/Layout.vue";
import { storage } from "../../shared/firebase/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getProducts } from "../../shared/service/productsService";
import { login } from "../../shared/service/RegisterService";
import { toast } from "vue3-toastify";

export default {
  components: {
    Layout,
  },
  data() {
    return {
      title: "",
      price: "",
      file: null,
      uploadValue: 0,
      image: "",
      description: "",
      info: [],
    };
  },

  methods: {
    async submitForm() {
      const postData = {
        id: this.info.products?.length + 1,
        name: this.title,
        description: this.description,
        price: Number(this.price),
        image: this.image,
        status: false,
      };
      try {
        const response = await updateProducts(postData);
        toast.success("Вы успешно создали продукт.", {
          autoClose: 1000,
        });
        this.getProducts();
        this.title = "",
        this.price = "",
        this.description = "",
        this.image = ""
      } catch (e) {
        console.log(e);
      }
    },
    async getProducts() {
      try {
        const data = await getProducts();
        this.info = data;
      } catch (e) {
        console.log(e);
      }
    },

    handleFileChange(e) {
      this.file = e.target.files[0];
      this.uploud();
    },

    uploud() {
      const storageRef = ref(storage, `${this.file.name}`);
      uploadBytes(storageRef, this.file)
        .then((snapshot) => {
          console.log("Файл успешно загружен!");
          this.uploadValue = 100;

          // Получение URL загруженного файла
          getDownloadURL(snapshot.ref).then((url) => {
            this.image = url;
            console.log(this.image);
          });
        })
        .catch((error) => {
          console.error("Ошибка при загрузке файла:", error.message);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<template>
  <Layout>
    <div class="form">
      <div class="form_flex">
        <label class="form_label" for="title">Product title</label>
        <input
          class="form_input"
          v-model="title"
          type="text"
          id="title"
          placeholder="Title"
        />
      </div>
      <div class="form_flex">
        <label class="form_label" for="description">Product description</label>
        <input
          class="form_input"
          v-model="description"
          type="text"
          id="description"
          placeholder="Description"
        />
      </div>
      <div class="form_flex">
        <label class="form_label" for="price">Product price</label>
        <input
          class="form_input"
          v-model="price"
          type="number"
          id="price"
          min="0"
          placeholder="0.00"
        />
      </div>
      <div class="form_flex">
        <label class="form_label" for="file">Product photo</label>
        <input
          class="upload_input"
          @change="handleFileChange"
          type="file"
          id="file"
        />
      </div>

      <button class="form_btn" @click="submitForm">Send</button>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
@import "./CreateProduct.scss";
</style>
