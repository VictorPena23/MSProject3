import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import gsap from 'gsap';
import React, { useEffect } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  const Line = ($el) => {
    const $paths = $el.querySelectorAll('.path');
    const tl = gsap.timeline();
    const duration = gsap.utils.random(40, 80);
    const y = gsap.utils.random(-250, 250);
    const rotate = gsap.utils.random(-20, 20);
    const scaleXFrom = gsap.utils.random(2, 2.5);
    const scaleXTo = gsap.utils.random(1.5, 1.75);
    const scaleYFrom = gsap.utils.random(1.5, 2);
    const scaleYTo = gsap.utils.random(0.6, 0.7);
    const opacityFrom = gsap.utils.random(0.75, 0.8);
    const opacityTo = gsap.utils.random(0.85, 1);
    const ease = gsap.utils.random(['power2.inOut', 'power3.inOut', 'power4.inOut', 'sine.inOut']);
    tl.to($paths, {
      xPercent: -100,
      duration: duration,
      ease: 'none',
      repeat: -1
    });

    tl.fromTo(
      $el,
      {
        y,
        opacity: opacityFrom,
        rotate,
        scaleY: scaleYFrom,
        scaleX: scaleXFrom,
        transformOrigin: '50% 50%'
      },
      {
        y: y * -1,
        opacity: opacityTo,
        rotate: rotate * -1,
        scaleY: scaleYTo,
        scaleX: scaleXTo,
        repeat: -1,
        yoyo: true,
        yoyoEase: ease,
        duration: duration * 0.25,
        ease: ease,
        transformOrigin: '50% 50%'
      },
      0
    );

    tl.seek(gsap.utils.random(10, 20));
  };

  useEffect(() => {
    gsap.utils.toArray('.g').forEach(($el) => Line($el));
    gsap.to('svg', { opacity: 1, duration: 1 });
  }, []);

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
