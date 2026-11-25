import React, { useEffect, useRef, useState } from 'react';

const pathPoints = [
  [0.18,0.78],[0.18,0.53],[0.26,0.40],[0.42,0.40],[0.55,0.52],[0.72,0.52],[0.82,0.39],[0.82,0.20],[0.66,0.16],[0.49,0.16],[0.36,0.23],[0.25,0.23]
];
function App(){
  const canvasRef=useRef(null), animRef=useRef(null), robotRef=useRef({segment:0,t:0,x:0.18,y:0.78,angle:-Math.PI/2});
  const [running,setRunning]=useState(false), [speed,setSpeed]=useState(1), [elapsed,setElapsed]=useState(0);
  const runningRef=useRef(running); useEffect(()=>{runningRef.current=running},[running]);
  useEffect(()=>{
    const canvas=canvasRef.current, ctx=canvas.getContext('2d'); let last=performance.now();
    function resize(){const rect=canvas.getBoundingClientRect(), dpr=Math.min(window.devicePixelRatio||1,2); canvas.width=rect.width*dpr; canvas.height=rect.height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);draw();}
    function draw(){const w=canvas.clientWidth,h=canvas.clientHeight;ctx.clearRect(0,0,w,h);ctx.fillStyle='#141b23';ctx.fillRect(0,0,w,h);
      // decorative grid
      ctx.strokeStyle='#202b36';ctx.lineWidth=1;for(let x=0;x<w;x+=30){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke()}for(let y=0;y<h;y+=30){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}
      const pts=pathPoints.map(([x,y])=>[x*w,y*h]);
      ctx.lineJoin='round';ctx.lineCap='round';ctx.strokeStyle='#f4f5f6';ctx.lineWidth=Math.min(w,h)*.075;ctx.beginPath();ctx.moveTo(...pts[0]);pts.slice(1).forEach(p=>ctx.lineTo(...p));ctx.lineTo(...pts[0]);ctx.stroke();
      ctx.strokeStyle='#111';ctx.lineWidth=Math.min(w,h)*.044;ctx.beginPath();ctx.moveTo(...pts[0]);pts.slice(1).forEach(p=>ctx.lineTo(...p));ctx.lineTo(...pts[0]);ctx.stroke();
      // start line
      ctx.strokeStyle='#10b981';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(pts[0][0]-18,pts[0][1]);ctx.lineTo(pts[0][0]+18,pts[0][1]);ctx.stroke();
      const r=robotRef.current, rx=r.x*w, ry=r.y*h;ctx.save();ctx.translate(rx,ry);ctx.rotate(r.angle);ctx.fillStyle='#0ea5e9';ctx.strokeStyle='#e0f2fe';ctx.lineWidth=2;ctx.beginPath();ctx.roundRect(-15,-22,30,44,6);ctx.fill();ctx.stroke();ctx.fillStyle='#0b2535';ctx.fillRect(-20,-16,5,32);ctx.fillRect(15,-16,5,32);ctx.fillStyle='#f59e0b';for(let i=-2;i<=2;i++){ctx.beginPath();ctx.arc(i*5,24,2.5,0,Math.PI*2);ctx.fill()}ctx.fillStyle='#fff';ctx.beginPath();ctx.moveTo(0,-14);ctx.lineTo(6,-4);ctx.lineTo(-6,-4);ctx.closePath();ctx.fill();ctx.restore();
      ctx.fillStyle='#d1d5db';ctx.font='12px system-ui';ctx.fillText('BAŞLANGIÇ',pts[0][0]+24,pts[0][1]+5);
    }
    function frame(now){const dt=Math.min((now-last)/1000,.05);last=now;if(runningRef.current){const r=robotRef.current;r.t+=dt*.17*speed;if(r.t>=1){r.t=0;r.segment=(r.segment+1)%pathPoints.length}const a=pathPoints[r.segment],b=pathPoints[(r.segment+1)%pathPoints.length];r.x=a[0]+(b[0]-a[0])*r.t;r.y=a[1]+(b[1]-a[1])*r.t;r.angle=Math.atan2((b[1]-a[1])*canvas.clientHeight,(b[0]-a[0])*canvas.clientWidth);setElapsed(v=>v+dt)}draw();animRef.current=requestAnimationFrame(frame)}
    resize();animRef.current=requestAnimationFrame(frame);window.addEventListener('resize',resize);return()=>{cancelAnimationFrame(animRef.current);window.removeEventListener('resize',resize)};
  },[speed]);
  function reset(){setRunning(false);setElapsed(0);robotRef.current={segment:0,t:0,x:pathPoints[0][0],y:pathPoints[0][1],angle:-Math.PI/2};}
  return <div className="app"><header><div className="brand"><div className="logo">P</div><div><h1>PARS <span>LINE LAB</span></h1><small>Çizgi İzleyen Robot Simülatörü</small></div></div><div className="version">v0.1.0 <span>ALPHA</span></div></header>
  <main><section className="stage"><div className="stageHead"><div><h2>Simülasyon Alanı</h2><p>2D pist · temel hareket modeli</p></div><div className={`status ${running?'live':''}`}><i/> {running?'ÇALIŞIYOR':'DURAKLATILDI'}</div></div><canvas ref={canvasRef}/><div className="stageFoot"><span>Parkur: <b>LAB-01</b></span><span>Robot: <b>PARS-LF01</b></span></div></section>
  <aside><div className="panel"><h3>Kontrol Paneli</h3><div className="buttons"><button className="start" onClick={()=>setRunning(true)}>▶ Başlat</button><button className="pause" onClick={()=>setRunning(false)}>Ⅱ Durdur</button><button className="reset" onClick={reset}>↺ Sıfırla</button></div><div className="stat"><label>Simülasyon süresi</label><strong>{elapsed.toFixed(2)} <small>sn</small></strong></div><div className="speed"><label htmlFor="speed">Hız çarpanı <b>{speed.toFixed(1)}x</b></label><input id="speed" type="range" min="0.3" max="2.5" step="0.1" value={speed} onChange={e=>setSpeed(Number(e.target.value))}/><div className="rangeLabels"><span>0.3x</span><span>2.5x</span></div></div></div><div className="panel info"><h3>v0.1.0 Özellikleri</h3><ul><li>Temel 2D pist</li><li>Robot hareket animasyonu</li><li>Başlat / durdur / devam</li><li>Başlangıca sıfırlama</li><li>Hız kontrolü</li></ul><p className="next">SONRAKİ: Sensör dizisi ve canlı okuma paneli</p></div></aside></main><footer>© PARS LINE LAB · ROBKOD <span>Öğren · Tasarla · Simüle Et</span></footer></div>
}
export default App;
