import React, { useEffect, useRef } from 'react';
import axios from 'axios';

function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await axios.post('https://api.skilla.ru/mango/getRecord?record=MToxMDA2NzYxNToxNDMwMDM3NzExNzow&partnership_id=578',{} ,{
          responseType: 'blob',
          headers: {
                    "Authorization": "Bearer testtoken",
                    "Content-type" : "audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3",
                    "Content-Transfer-Encoding":"binary",
                    // "Content-Disposition":`filename=\"record.mp3\"`

                }
        });
        const audioBlobUrl = URL.createObjectURL(response.data);
        if (audioRef.current) {
          audioRef.current.src = audioBlobUrl;
          audioRef.current.load();
        }
      } catch (error) {
        console.log('Error fetching audio:', error);
      }
    };

    fetchAudio();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div>
      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button>
      <audio ref={audioRef} controls></audio>
    </div>
  );
}

export default AudioPlayer;