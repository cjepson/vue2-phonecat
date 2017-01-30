<template>
  <div>
    <div class="phone-images">
      <img v-for="img in phone.images" v-bind:src="'content\\' + mainImageUrl"
           v-bind:class="['phone', mainImageUrl == img ? 'detail-enter': 'detail-leave']"
           >
    </div>
    <h1>{{phone.name}}</h1>

    <p>{{phone.description}}</p>

    <ul class="phone-thumbs">
      <li v-for="img in phone.images">
        <img v-bind:src="'content\\' + img" v-on:click="setImage(img)">
      </li>
    </ul>

    <ul class="specs">
      <li>
        <span>Availability and Networks</span>
        <dl>
          <dt>Availability</dt>
          <dd v-for="availability in phone.availability">{{availability}}</dd>
        </dl>
      </li>
      <li>
        <span>Battery</span>
        <dl>
          <dt>Type</dt>
          <dd>{{phone.battery.type}}</dd>
          <dt>Talk Time</dt>
          <dd>{{phone.battery.talkTime}}</dd>
          <dt>Standby time (max)</dt>
          <dd>{{phone.battery.standbyTime}}</dd>
        </dl>
      </li>
      <li>
        <span>Storage and Memory</span>
        <dl>
          <dt>RAM</dt>
          <dd>{{phone.storage.ram}}</dd>
          <dt>Internal Storage</dt>
          <dd>{{phone.storage.flash}}</dd>
        </dl>
      </li>
      <li>
        <span>Connectivity</span>
        <dl>
          <dt>Network Support</dt>
          <dd>{{phone.connectivity.cell}}</dd>
          <dt>WiFi</dt>
          <dd>{{phone.connectivity.wifi}}</dd>
          <dt>Bluetooth</dt>
          <dd>{{phone.connectivity.bluetooth}}</dd>
          <dt>Infrared</dt>
          <dd>{{checkmark(phone.connectivity.infrared)}}</dd>
          <dt>GPS</dt>
          <dd>{{ checkmark(phone.connectivity.gps) }}</dd>
        </dl>
      </li>
      <li>
        <span>Android</span>
        <dl>
          <dt>OS Version</dt>
          <dd>{{phone.android.os}}</dd>
          <dt>UI</dt>
          <dd>{{phone.android.ui}}</dd>
        </dl>
      </li>
      <li>
        <span>Size and Weight</span>
        <dl>
          <dt>Dimensions</dt>
          <dd v-for="dim in phone.sizeAndWeight.dimensions">{{dim}}</dd>
          <dt>Weight</dt>
          <dd>{{phone.sizeAndWeight.weight}}</dd>
        </dl>
      </li>
      <li>
        <span>Display</span>
        <dl>
          <dt>Screen size</dt>
          <dd>{{phone.display.screenSize}}</dd>
          <dt>Screen resolution</dt>
          <dd>{{phone.display.screenResolution}}</dd>
          <dt>Touch screen</dt>
          <dd>{{ checkmark(phone.display.touchScreen) }}</dd>
        </dl>
      </li>
      <li>
        <span>Hardware</span>
        <dl>
          <dt>CPU</dt>
          <dd>{{phone.hardware.cpu}}</dd>
          <dt>USB</dt>
          <dd>{{phone.hardware.usb}}</dd>
          <dt>Audio / headphone jack</dt>
          <dd>{{phone.hardware.audioJack}}</dd>
          <dt>FM Radio</dt>
          <dd>{{ checkmark(phone.hardware.fmRadio) }}</dd>
          <dt>Accelerometer</dt>
          <dd>{{ checkmark(phone.hardware.accelerometer) }}</dd>
        </dl>
      </li>
      <li>
        <span>Camera</span>
        <dl>
          <dt>Primary</dt>
          <dd>{{phone.camera.primary}}</dd>
          <dt>Features</dt>
          <dd>{{phone.camera.features.join(', ')}}</dd>
        </dl>
      </li>
      <li>
        <span>Additional Features</span>
        <dd>{{phone.additionalFeatures}}</dd>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        // Dummy phone insertion. Ideally you should wait for the phone data to load,
        // then display an animation moving into the new view.
        phone: {
          "additionalFeatures":"","android":{"os":"","ui":""},"availability":[""],
          "battery":{"standbyTime":"","talkTime":"","type":""},"camera":{"features":[""],
          "primary":""},"connectivity":{"bluetooth":"","cell":"","gps":true,"infrared":false,
          "wifi":""},"description":"","display":{"screenResolution":"","screenSize":"",
          "touchScreen":true},"hardware":{"accelerometer":true,"audioJack":"","cpu":"",
          "fmRadio":false,"physicalKeyboard":false,"usb":""},"id":"","images":[""],"name":"",
          "sizeAndWeight":{"dimensions":["","",""],"weight":""},"storage":{"flash":"","ram":""}
          },
        mainImageUrl: ''
      }
    },

    methods: {
      // fetchPhoneData queries the resource manager to fetch the page specified by the
      // id inserted into the URL.
      fetchPhoneData: function () {
        this.$http.get('../content/phones/' +  this.$route.params.id + '.json').then((response) => {
          this.$set(this, 'phone', response.body)
          this.$set(this, 'mainImageUrl', response.body.images[0])
        }, (response) => {
          console.log("Couldn't find the phone file for phone id: " + id)
        })
      },

      // setImage sets the large sized image in the page when a thumbnail is clicked.
      setImage: function(imageUrl) {
        this.mainImageUrl = imageUrl;
      },

      // checkmark converts a true/false boolean into a checkmark.
      checkmark: function (value) {
            return value ? '\u2713' : '\u2718';
      }
    },

    created: function () {
        this.fetchPhoneData();
    },
  }
</script>

<style scoped>
</style>
