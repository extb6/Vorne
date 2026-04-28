"use client"

import { useState, useMemo } from "react"
import { Calculator, DollarSign, TrendingUp, Calendar, Percent } from "lucide-react"

const plans = [
  { name: "Basic", min: 250, max: 4999, dailyReturn: 2, duration: 7 },
  { name: "Classic", min: 5000, max: 19999, dailyReturn: 4, duration: 10 },
  { name: "Bronze", min: 20000, max: 49999, dailyReturn: 6, duration: 15 },
  { name: "Premium", min: 50000, max: Infinity, dailyReturn: 10, duration: 20 },
]

export function InvestmentCalculator() {
  const [selectedPlan, setSelectedPlan] = useState(plans[0])
  const [amount, setAmount] = useState(selectedPlan.min)

  const calculations = useMemo(() => {
    const dailyProfit = (amount * selectedPlan.dailyReturn) / 100
    const totalProfit = dailyProfit * selectedPlan.duration
    const totalReturn = amount + totalProfit
    const percentageGain = ((totalProfit / amount) * 100).toFixed(1)
    
    return {
      dailyProfit,
      totalProfit,
      totalReturn,
      percentageGain,
    }
  }, [amount, selectedPlan])

  const handleAmountChange = (value: string) => {
    const numValue = parseFloat(value.replace(/,/g, "")) || 0
    setAmount(numValue)
    
    // Auto-select appropriate plan based on amount
    const appropriatePlan = plans.find(
      (p) => numValue >= p.min && numValue <= p.max
    ) || plans[plans.length - 1]
    
    if (appropriatePlan.name !== selectedPlan.name) {
      setSelectedPlan(appropriatePlan)
    }
  }

  const handlePlanSelect = (plan: typeof plans[0]) => {
    setSelectedPlan(plan)
    if (amount < plan.min) {
      setAmount(plan.min)
    } else if (amount > plan.max && plan.max !== Infinity) {
      setAmount(plan.max)
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14] via-[#12121c] to-[#0a0a14]" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a2e] border border-[#2a2a3e] mb-6">
            <Calculator className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Investment Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Returns</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See exactly how much you can earn with Xchain&#x2021;&apos;s automated trading system. 
            Select your plan and investment amount to calculate your potential returns.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Input Section */}
          <div className="bg-[#12121c] border border-[#2a2a3e] rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Select Your Investment</h3>
            
            {/* Plan Selection */}
            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-3">Choose Plan</label>
              <div className="grid grid-cols-2 gap-3">
                {plans.map((plan) => (
                  <button
                    key={plan.name}
                    onClick={() => handlePlanSelect(plan)}
                    className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                      selectedPlan.name === plan.name
                        ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/50"
                        : "bg-[#1a1a2e] border-[#2a2a3e] hover:border-purple-500/30"
                    }`}
                  >
                    <div className="text-white font-medium">{plan.name}</div>
                    <div className="text-sm text-purple-400">{plan.dailyReturn}% daily</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {plan.max === Infinity 
                        ? `$${plan.min.toLocaleString()}+`
                        : `$${plan.min.toLocaleString()} - $${plan.max.toLocaleString()}`
                      }
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Input */}
            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-3">Investment Amount (USD)</label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={amount.toLocaleString()}
                  onChange={(e) => handleAmountChange(e.target.value)}
                  className="w-full bg-[#1a1a2e] border border-[#2a2a3e] rounded-xl py-4 pl-12 pr-4 text-white text-lg font-medium focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                <span>Min: {formatCurrency(selectedPlan.min)}</span>
                <span>Max: {selectedPlan.max === Infinity ? "Unlimited" : formatCurrency(selectedPlan.max)}</span>
              </div>
            </div>

            {/* Quick Amount Buttons */}
            <div className="flex flex-wrap gap-2">
              {[1000, 5000, 10000, 25000, 50000, 100000].map((quickAmount) => (
                <button
                  key={quickAmount}
                  onClick={() => handleAmountChange(quickAmount.toString())}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    amount === quickAmount
                      ? "bg-purple-500 text-white"
                      : "bg-[#1a1a2e] text-gray-400 hover:bg-[#2a2a3e] hover:text-white"
                  }`}
                >
                  ${quickAmount >= 1000 ? `${quickAmount / 1000}K` : quickAmount}
                </button>
              ))}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#12121c] border border-[#2a2a3e] rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Your Projected Returns</h3>
            
            <div className="space-y-4">
              {/* Daily Profit */}
              <div className="bg-[#0a0a14] rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Daily Profit</div>
                    <div className="text-xs text-gray-500">{selectedPlan.dailyReturn}% of investment</div>
                  </div>
                </div>
                <div className="text-xl font-bold text-green-400">
                  {formatCurrency(calculations.dailyProfit)}
                </div>
              </div>

              {/* Duration */}
              <div className="bg-[#0a0a14] rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Investment Duration</div>
                    <div className="text-xs text-gray-500">{selectedPlan.name} plan period</div>
                  </div>
                </div>
                <div className="text-xl font-bold text-white">
                  {selectedPlan.duration} Days
                </div>
              </div>

              {/* Total Profit */}
              <div className="bg-[#0a0a14] rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Percent className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Total Profit</div>
                    <div className="text-xs text-gray-500">+{calculations.percentageGain}% gain</div>
                  </div>
                </div>
                <div className="text-xl font-bold text-green-400">
                  {formatCurrency(calculations.totalProfit)}
                </div>
              </div>

              {/* Total Return */}
              <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl p-5 border border-purple-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-300">Total Return</div>
                      <div className="text-xs text-gray-400">Capital + Profit</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      {formatCurrency(calculations.totalReturn)}
                    </div>
                    <div className="text-xs text-green-400">
                      After {selectedPlan.duration} days
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
              Start Earning Now
              <TrendingUp className="w-5 h-5" />
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">
              *Returns are calculated based on selected plan rates. Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
