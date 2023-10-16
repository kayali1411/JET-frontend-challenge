import { useState, useEffect, useRef } from 'react';

function useScrollableView() {
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    function handleElementHeightChange() {
      const element = scrollableRef.current;
      if (element) {
        const parentHeight =
          element.parentElement?.getBoundingClientRect().height;
        const elementHeight = element.scrollHeight;
        if (parentHeight && elementHeight > parentHeight) {
          setIsScrolling(true);
          element.style.scrollBehavior = 'smooth';
          element.scrollTop = element.scrollHeight;
        } else {
          setIsScrolling(false);
        }
      }
    }

    const observer = new MutationObserver(handleElementHeightChange);
    if (scrollableRef.current) {
      observer.observe(scrollableRef.current, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return { scrollableRef, isScrolling };
}

export default useScrollableView;
