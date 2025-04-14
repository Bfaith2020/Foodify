import React from 'react'
import "./CookingTips.css"; 
function CookingTips() {
  return (
    <div className='cooking-tips'>
    <h2>Cooking Tips & Tricks</h2>
    <ul>
        <li className="tip-item">
            <button className="tip-title">How to perfectly boil an egg every time</button>
            <div className="tip-content">
                <p>Place eggs in a pot of cold water, bring to a boil, then simmer for 9-12 minutes depending on your desired doneness. Cool in ice water before peeling.</p>
            </div>
        </li>
        <li className="tip-item">
            <button className="tip-title">5 ways to use leftover vegetables creatively</button>
            <div className="tip-content">
                <p>Turn them into soups, stir-fries, omelets, or even veggie patties. You can also blend them into a smoothie for a healthy twist!</p>
            </div>
        </li>
        <li className="tip-item">
            <button className="tip-title">Secrets to making the fluffiest pancakes</button>
            <div className="tip-content">
                <p>Use buttermilk, don’t overmix the batter, and let it rest for 10 minutes before cooking. Cook on medium heat for even fluffiness.</p>
            </div>
        </li>
    </ul>
</div>
  )
}

export default CookingTips;