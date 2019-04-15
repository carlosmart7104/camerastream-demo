# CameraStream Plugin Demo App

Applicación de prueba para el cordova-plugin-camerastream.

Obtener una copia local del repositorio:
``` bash
git clone https://github.com/carlosmart7104/camerastream-demo.git
```

Moverse a la carpeta:
``` bash
cd camerastream-demo
```

Comprobar que cordova está instalado:
``` bash
cordova -v
```

Verificar que el proyecto está listo para utilizarse con cordova:
``` bash
cordova requirements

// La respuesta deberá ser algo como esto:
> Android Studio project detected

Requirements check results for android:
Java JDK: installed 1.8.0
Android SDK: installed true
Android target: installed android-28,android-27,android-26,android-25,android-24,android-22
Gradle: installed /usr/share/gradle/bin/gradle
```

Ejecutar el proyecto en android:
``` bash
cordova run android
```
Crear una versión para producción:
``` bash
cordova build android
```
El APK se encuentra en:
<project>/platforms/android/app/build/outputs/apk/release

Es necesario firmarla para poder instalarla.