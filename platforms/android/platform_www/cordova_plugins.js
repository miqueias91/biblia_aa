cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification_android",
    "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Location",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.location.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.location"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Bluetooth",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.bluetooth.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.bluetooth"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Wifi",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.wifi.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.wifi"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Camera",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.camera.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.camera"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Notifications",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.notifications.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.notifications"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Microphone",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.microphone.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.microphone"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Contacts",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.contacts.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.contacts"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Calendar",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.calendar.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.calendar"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_NFC",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.nfc.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.nfc"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_External_Storage",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.external_storage.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.external_storage"
    ]
  },
  {
    "id": "onesignal-cordova-plugin.OneSignal",
    "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
    "pluginId": "onesignal-cordova-plugin",
    "clobbers": [
      "OneSignal"
    ]
  },
  {
    "id": "phonegap-plugin-push.PushNotification",
    "file": "plugins/phonegap-plugin-push/www/push.js",
    "pluginId": "phonegap-plugin-push",
    "clobbers": [
      "PushNotification"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-console": "1.0.7",
  "cordova-plugin-dialogs": "1.2.1",
  "cordova-plugin-geolocation": "4.0.1",
  "cordova-plugin-statusbar": "2.1.3",
  "cordova-plugin-whitelist": "1.2.2",
  "cordova.plugins.diagnostic": "4.0.12",
  "onesignal-cordova-plugin": "2.4.6",
  "phonegap-plugin-push": "1.8.4"
};
// BOTTOM OF METADATA
});