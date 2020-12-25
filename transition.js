import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class Fade extends Highway.Transition {
    /* The page you are clicking to get to */
    in({from, to, done}) {
        const t1 = new TimelineLite();
        t1.fromTo(to, 0.4, {left: '-100%', top: '50%'}, {left: '0%'})
        .fromTo(to, 0.4, {height: '2vh'}, {height: '90vh', top: '10%', onComplete: function(){
            from.remove();
            done();
        }})
        .fromTo(to.children[0], 2, {opacity: 0}, {opacity: 1});
    }
    /*Page you are clicking out of */
    out({from, done}) {
        done();
    }
}
export default Fade;