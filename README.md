# WIP Repository to simulate client load in videconfernce webapps.
TODO Documentation properly done

## CONFIG
Copiar configDefaults a config.js y smarterpDefault.js a smarterConfig.js y rellenar.

### Obligatorio
En config
- smarterpURL: URL para hacer login

En smarterpConfig
- sesion: URL de la sala.
- Contraseñas y ususarios de tech operator e interpretes

### Opcional
- unsercureIP: Si no se usa HTTPS, configurar para que chrome pueda compartir el video.
- videoFile: Video por defecto para usar de camara. Si esta a false chrome genera un video sintetico;
- audioFile: Audio por defecto para usar de microfono. Si esta a false chrome genera un audio sintetico;

En smarterpConfig
- iddleParticipants: Si true los participantes no tocan ningun boton, si no van pulsando random entre varias acciones
- numberPublic: Numero de participantes por parte del publico
- publicAddr: URL para publico, puede ser con o sin video.


## Lanzar docker

Lanzar desde la carpeta en la que estan creadas las carpetas
```
docker run -v $(pwd)/config:/data/TestLoad/config  -v $(pwd)/logs:/data/TestLoad/logs --network host -v $(pwd)/files:/data/TestLoad/files belisario98/smarterpmeas
```
- La carpeta logs si queremos sacar los logs de error y warning.
- La carpeta de config obligatoria para pasar los ficheros
- La carpeta de files si queremos pasar ficheros de audio y video
