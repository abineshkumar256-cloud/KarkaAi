import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
// src/components/Icons.jsx
const Sparkles = ({ className = "w-5 h-5", ...props }) => /* @__PURE__ */ jsxs("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: [
		/* @__PURE__ */ jsx("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }),
		/* @__PURE__ */ jsx("path", { d: "M5 3v4" }),
		/* @__PURE__ */ jsx("path", { d: "M19 17v4" }),
		/* @__PURE__ */ jsx("path", { d: "M3 5h4" }),
		/* @__PURE__ */ jsx("path", { d: "M17 19h4" })
	]
});
const TerminalIcon = ({ className = "w-5 h-5", ...props }) => /* @__PURE__ */ jsxs("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: [/* @__PURE__ */ jsx("polyline", { points: "4 17 10 11 4 5" }), /* @__PURE__ */ jsx("line", {
		x1: "12",
		x2: "20",
		y1: "19",
		y2: "19"
	})]
});
const CheckCircle = ({ className = "w-5 h-5", ...props }) => /* @__PURE__ */ jsxs("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: [/* @__PURE__ */ jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }), /* @__PURE__ */ jsx("polyline", { points: "22 4 12 14.01 9 11.01" })]
});
const ChevronRight = ({ className = "w-4 h-4", ...props }) => /* @__PURE__ */ jsx("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: /* @__PURE__ */ jsx("polyline", { points: "9 18 15 12 9 6" })
});
const ChevronDown = ({ className = "w-4 h-4", ...props }) => /* @__PURE__ */ jsx("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: /* @__PURE__ */ jsx("polyline", { points: "6 9 12 15 18 9" })
});
const ArrowRight = ({ className = "w-4 h-4", ...props }) => /* @__PURE__ */ jsxs("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: [/* @__PURE__ */ jsx("line", {
		x1: "5",
		x2: "19",
		y1: "12",
		y2: "12"
	}), /* @__PURE__ */ jsx("polyline", { points: "12 5 19 12 12 19" })]
});
const ShieldCheck = ({ className = "w-5 h-5", ...props }) => /* @__PURE__ */ jsxs("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: [/* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" }), /* @__PURE__ */ jsx("path", { d: "m9 12 2 2 4-4" })]
});
const Users = ({ className = "w-5 h-5", ...props }) => /* @__PURE__ */ jsxs("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: [
		/* @__PURE__ */ jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
		/* @__PURE__ */ jsx("circle", {
			cx: "9",
			cy: "7",
			r: "4"
		}),
		/* @__PURE__ */ jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
		/* @__PURE__ */ jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
	]
});
const Clock = ({ className = "w-5 h-5", ...props }) => /* @__PURE__ */ jsxs("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: [/* @__PURE__ */ jsx("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}), /* @__PURE__ */ jsx("polyline", { points: "12 6 12 12 16 14" })]
});
const Code = ({ className = "w-5 h-5", ...props }) => /* @__PURE__ */ jsxs("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: [/* @__PURE__ */ jsx("polyline", { points: "16 18 22 12 16 6" }), /* @__PURE__ */ jsx("polyline", { points: "8 6 2 12 8 18" })]
});
const Cpu = ({ className = "w-5 h-5", ...props }) => /* @__PURE__ */ jsxs("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: [
		/* @__PURE__ */ jsx("rect", {
			width: "16",
			height: "16",
			x: "4",
			y: "4",
			rx: "2"
		}),
		/* @__PURE__ */ jsx("rect", {
			width: "6",
			height: "6",
			x: "9",
			y: "9"
		}),
		/* @__PURE__ */ jsx("path", { d: "M15 2v2" }),
		/* @__PURE__ */ jsx("path", { d: "M15 20v2" }),
		/* @__PURE__ */ jsx("path", { d: "M2 15h2" }),
		/* @__PURE__ */ jsx("path", { d: "M2 9h2" }),
		/* @__PURE__ */ jsx("path", { d: "M20 15h2" }),
		/* @__PURE__ */ jsx("path", { d: "M20 9h2" }),
		/* @__PURE__ */ jsx("path", { d: "M9 2v2" }),
		/* @__PURE__ */ jsx("path", { d: "M9 20v2" })
	]
});
const Activity = ({ className = "w-5 h-5", ...props }) => /* @__PURE__ */ jsx("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: /* @__PURE__ */ jsx("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" })
});
const Phone = ({ className = "w-5 h-5", ...props }) => /* @__PURE__ */ jsx("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: /* @__PURE__ */ jsx("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" })
});
const MessageSquare = ({ className = "w-5 h-5", ...props }) => /* @__PURE__ */ jsx("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: /* @__PURE__ */ jsx("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
});
const Download = ({ className = "w-4 h-4", ...props }) => /* @__PURE__ */ jsxs("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: [
		/* @__PURE__ */ jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
		/* @__PURE__ */ jsx("polyline", { points: "7 10 12 15 17 10" }),
		/* @__PURE__ */ jsx("line", {
			x1: "12",
			x2: "12",
			y1: "15",
			y2: "3"
		})
	]
});
const Eye = ({ className = "w-4 h-4", ...props }) => /* @__PURE__ */ jsxs("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: [/* @__PURE__ */ jsx("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }), /* @__PURE__ */ jsx("circle", {
		cx: "12",
		cy: "12",
		r: "3"
	})]
});
const X = ({ className = "w-5 h-5", ...props }) => /* @__PURE__ */ jsxs("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: [/* @__PURE__ */ jsx("line", {
		x1: "18",
		x2: "6",
		y1: "6",
		y2: "18"
	}), /* @__PURE__ */ jsx("line", {
		x1: "6",
		x2: "18",
		y1: "6",
		y2: "18"
	})]
});
const Star = ({ className = "w-4 h-4", ...props }) => /* @__PURE__ */ jsx("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "currentColor",
	stroke: "currentColor",
	strokeWidth: "1",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: /* @__PURE__ */ jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
});
const RefreshCw = ({ className = "w-4 h-4", ...props }) => /* @__PURE__ */ jsxs("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: [
		/* @__PURE__ */ jsx("path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }),
		/* @__PURE__ */ jsx("path", { d: "M21 3v5h-5" }),
		/* @__PURE__ */ jsx("path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }),
		/* @__PURE__ */ jsx("path", { d: "M8 16H3v5" })
	]
});
const Instagram = ({ className = "w-5 h-5", ...props }) => /* @__PURE__ */ jsxs("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: [
		/* @__PURE__ */ jsx("rect", {
			width: "20",
			height: "20",
			x: "2",
			y: "2",
			rx: "5",
			ry: "5"
		}),
		/* @__PURE__ */ jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
		/* @__PURE__ */ jsx("line", {
			x1: "17.5",
			x2: "17.51",
			y1: "6.5",
			y2: "6.5"
		})
	]
});
// src/components/Navbar.jsx
function Navbar({ activePage, setActivePage, onOpenAssessment, onOpenEligibility }) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const navItems = [
		{
			id: "home",
			label: "Overview"
		},
		{
			id: "tracks",
			label: "Career Tracks"
		},
		{
			id: "production-lab",
			label: "Production Lab"
		},
		{
			id: "isa",
			label: "Pay After Placement"
		},
		{
			id: "placements",
			label: "Verified Offers"
		}
	];
	return /* @__PURE__ */ jsxs("header", {
		style: {
			position: "absolute",
			top: 0,
			left: 0,
			zIndex: 50,
			width: "100%",
			backgroundColor: "transparent",
			fontFamily: "var(--font-sans)"
		},
		children: [
			/* @__PURE__ */ jsxs("div", {
				style: {
					background: "linear-gradient(90deg, #1e3a8a 0%, #2563eb 50%, #1d4ed8 100%)",
					color: "#ffffff",
					fontSize: "0.74rem",
					fontWeight: 600,
					padding: "4px 1rem",
					textAlign: "center",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "8px",
					letterSpacing: "0.02em"
				},
				className: "announcement-bar",
				children: [
					/* @__PURE__ */ jsx("span", {
						style: {
							background: "rgba(255, 255, 255, 0.2)",
							padding: "2px 7px",
							borderRadius: "9999px",
							fontSize: "0.68rem",
							textTransform: "uppercase"
						},
						className: "cohort-badge",
						children: "🔥 NEXT COHORT"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "announcement-copy",
						children: "Admissions Open for Winter 2026 • 15 Seats Only • ₹0 Tuition Until Placed ≥ ₹5.0 LPA"
					}),
					/* @__PURE__ */ jsxs("button", {
						onClick: onOpenAssessment,
						style: {
							background: "transparent",
							border: "none",
							color: "#93c5fd",
							fontWeight: 700,
							cursor: "pointer",
							textDecoration: "underline",
							fontSize: "0.74rem",
							display: "inline-flex",
							alignItems: "center",
							gap: "2px"
						},
						className: "announcement-cta",
						children: ["Take Assessment ", /* @__PURE__ */ jsx(ChevronRight, { style: {
							width: 12,
							height: 12
						} })]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				style: {
					maxWidth: "1360px",
					width: "calc(100% - 32px)",
					margin: "12px auto 0",
					padding: "0.85rem 1.75rem",
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					gap: "1.25rem",
					whiteSpace: "nowrap",
					background: "rgba(255, 255, 255, 0.96)",
					border: "1px solid rgba(226, 232, 240, 0.9)",
					borderRadius: "18px",
					boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
					backdropFilter: "blur(12px)",
					WebkitBackdropFilter: "blur(12px)"
				},
				className: "navbar-main",
				children: [
					/* @__PURE__ */ jsxs("div", {
						onClick: () => {
							setActivePage("home");
							window.scrollTo({
								top: 0,
								behavior: "smooth"
							});
						},
						style: {
							display: "flex",
							alignItems: "center",
							gap: "0.85rem",
							cursor: "pointer",
							flexShrink: 0,
							textDecoration: "none"
						},
						children: [/* @__PURE__ */ jsx("div", {
							style: {
								width: "36px",
								height: "36px",
								borderRadius: "10px",
								background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								color: "#ffffff",
								boxShadow: "0 4px 12px rgba(37, 99, 235, 0.35)"
							},
							className: "navbar-logo-icon",
							children: /* @__PURE__ */ jsx(Sparkles, { style: {
								width: 20,
								height: 20
							} })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "6px"
							},
							children: [/* @__PURE__ */ jsxs("span", {
								style: {
									fontSize: "1.28rem",
									fontWeight: 800,
									letterSpacing: "-0.03em",
									color: "#0f172a",
									lineHeight: 1
								},
								className: "navbar-brand-title",
								children: ["Karka", /* @__PURE__ */ jsx("span", {
									style: { color: "#2563eb" },
									children: ".ai"
								})]
							}), /* @__PURE__ */ jsx("span", {
								style: {
									width: "7px",
									height: "7px",
									borderRadius: "50%",
									backgroundColor: "#10b981",
									display: "inline-block"
								},
								className: "animate-live-dot",
								title: "Live Admissions Active"
							})]
						}), /* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "0.65rem",
								color: "#64748b",
								fontWeight: 600,
								textTransform: "uppercase",
								letterSpacing: "0.04em",
								lineHeight: 1,
								marginTop: "3px"
							},
							className: "navbar-brand-subtitle",
							children: "Zero Upfront AI School"
						})] })]
					}),
					/* @__PURE__ */ jsx("nav", {
						style: {
							display: "none",
							alignItems: "center",
							gap: "0.35rem",
							background: "transparent",
							padding: "4px",
							borderRadius: "9999px"
						},
						className: "desktop-nav",
						children: navItems.map((item) => {
							const isActive = activePage === item.id;
							return /* @__PURE__ */ jsx("button", {
								onClick: () => {
									setActivePage(item.id);
									window.scrollTo({
										top: 0,
										behavior: "smooth"
									});
								},
								style: {
									background: "transparent",
									color: isActive ? "#2563eb" : "#475569",
									border: "none",
									outline: "none",
									padding: "0.45rem 0.95rem",
									borderRadius: "9999px",
									fontSize: "0.84rem",
									fontWeight: isActive ? 700 : 500,
									cursor: "pointer",
									transition: "all 0.14s ease",
									boxShadow: "none"
								},
								onMouseEnter: (e) => {
									if (!isActive) e.currentTarget.style.color = "#0f172a";
								},
								onMouseLeave: (e) => {
									if (!isActive) e.currentTarget.style.color = "#475569";
								},
								children: item.label
							}, item.id);
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: "0.85rem",
							flexShrink: 0
						},
						className: "navbar-actions",
						children: [
							/* @__PURE__ */ jsx("button", {
								onClick: onOpenEligibility,
								style: {
									display: "inline-flex",
									alignItems: "center",
									gap: "0.4rem",
									backgroundColor: "#ffffff",
									color: "#1e293b",
									border: "1px solid #cbd5e1",
									padding: "0.48rem 0.9rem",
									borderRadius: "8px",
									fontSize: "0.82rem",
									fontWeight: 600,
									cursor: "pointer",
									transition: "all 0.16s ease"
								},
								className: "hidden-mobile",
								onMouseEnter: (e) => {
									e.currentTarget.style.borderColor = "#2563eb";
									e.currentTarget.style.color = "#2563eb";
								},
								onMouseLeave: (e) => {
									e.currentTarget.style.borderColor = "#cbd5e1";
									e.currentTarget.style.color = "#1e293b";
								},
								children: "Check Eligibility"
							}),
							/* @__PURE__ */ jsxs("button", {
								onClick: onOpenAssessment,
								className: "btn-primary",
								style: {
									fontSize: "0.84rem",
									padding: "0.48rem 1.05rem",
									borderRadius: "8px"
								},
								children: [/* @__PURE__ */ jsx("span", { children: "Apply for Assessment" }), /* @__PURE__ */ jsx(ArrowRight, { style: {
									width: 14,
									height: 14
								} })]
							}),
							/* @__PURE__ */ jsx("button", {
								onClick: () => setMobileMenuOpen((isOpen) => !isOpen),
								style: {
									display: "none",
									background: "#f8fafc",
									border: "1px solid #e2e8f0",
									padding: "0.45rem",
									borderRadius: "8px",
									cursor: "pointer",
									color: "#334155"
								},
								className: "mobile-toggle",
								"aria-label": "Toggle navigation menu",
								"aria-expanded": mobileMenuOpen,
								"aria-controls": "mobile-navigation",
								children: /* @__PURE__ */ jsx("svg", {
									width: "22",
									height: "22",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									children: mobileMenuOpen ? /* @__PURE__ */ jsx("path", { d: "M18 6L6 18M6 6l12 12" }) : /* @__PURE__ */ jsx("path", { d: "M4 6h16M4 12h16M4 18h16" })
								})
							})
						]
					})
				]
			}),
			mobileMenuOpen && /* @__PURE__ */ jsxs("div", {
				id: "mobile-navigation",
				role: "navigation",
				"aria-label": "Mobile navigation",
				style: {
					background: "#ffffff",
					borderTop: "1px solid #e2e8f0",
					padding: "1rem 1.5rem",
					display: "flex",
					flexDirection: "column",
					gap: "0.6rem",
					boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
				},
				className: "mobile-drawer",
				children: [navItems.map((item) => /* @__PURE__ */ jsxs("button", {
					onClick: () => {
						setActivePage(item.id);
						setMobileMenuOpen(false);
						window.scrollTo({
							top: 0,
							behavior: "smooth"
						});
					},
					style: {
						textAlign: "left",
						padding: "0.65rem 0.85rem",
						borderRadius: "8px",
						background: activePage === item.id ? "#eff6ff" : "transparent",
						color: activePage === item.id ? "#2563eb" : "#334155",
						fontWeight: activePage === item.id ? 700 : 500,
						fontSize: "0.92rem",
						border: "none",
						cursor: "pointer",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center"
					},
					children: [/* @__PURE__ */ jsx("span", { children: item.label }), activePage === item.id && /* @__PURE__ */ jsx(ChevronRight, { style: {
						width: 16,
						height: 16
					} })]
				}, item.id)), /* @__PURE__ */ jsxs("div", {
					style: {
						paddingTop: "0.5rem",
						display: "flex",
						flexDirection: "column",
						gap: "0.5rem"
					},
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							onOpenEligibility();
							setMobileMenuOpen(false);
						},
						className: "btn-secondary",
						style: {
							width: "100%",
							justifyContent: "center"
						},
						children: "Check Eligibility"
					}), /* @__PURE__ */ jsx("button", {
						onClick: () => {
							onOpenAssessment();
							setMobileMenuOpen(false);
						},
						className: "btn-primary",
						style: {
							width: "100%",
							justifyContent: "center"
						},
						children: "Apply for Assessment →"
					})]
				})]
			}),
		]
	});
}
// src/components/Footer.jsx
function Footer({ setActivePage, onOpenCounselor, onOpenISA }) {
	return /* @__PURE__ */ jsxs("footer", {
		style: {
			backgroundColor: "#090d16",
			color: "#94a3b8",
			borderTop: "1px solid #1e293b",
			padding: "4rem 1.5rem 2rem",
			fontSize: "0.86rem"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto",
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
				gap: "2.5rem",
				paddingBottom: "3rem",
				borderBottom: "1px solid #1e293b"
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: { maxWidth: "300px" },
					children: [
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "8px",
								color: "#ffffff",
								fontSize: "1.25rem",
								fontWeight: 800,
								marginBottom: "1rem"
							},
							children: [/* @__PURE__ */ jsx("div", {
								style: {
									width: "32px",
									height: "32px",
									borderRadius: "8px",
									background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									color: "#ffffff"
								},
								children: /* @__PURE__ */ jsx(Sparkles, { style: {
									width: 18,
									height: 18
								} })
							}), /* @__PURE__ */ jsx("span", { children: "Karka.ai" })]
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								lineHeight: 1.6,
								fontSize: "0.84rem",
								color: "#94a3b8",
								marginBottom: "1.25rem"
							},
							children: "India's premier real AI engineering school. Operating on 100% skin-in-the-game Income Share Agreements. Zero upfront tuition until placed."
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "8px",
								color: "#10b981",
								fontSize: "0.78rem",
								fontWeight: 600
							},
							children: [/* @__PURE__ */ jsx("span", {
								style: {
									width: "8px",
									height: "8px",
									borderRadius: "50%",
									backgroundColor: "#10b981"
								},
								className: "animate-live-dot"
							}), /* @__PURE__ */ jsx("span", { children: "Admissions Active for 2026 Batch" })]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					style: {
						color: "#ffffff",
						fontSize: "0.9rem",
						fontWeight: 700,
						marginBottom: "1.2rem",
						textTransform: "uppercase",
						letterSpacing: "0.05em"
					},
					children: "Curated Tracks"
				}), /* @__PURE__ */ jsxs("ul", {
					style: {
						listStyle: "none",
						display: "flex",
						flexDirection: "column",
						gap: "0.75rem"
					},
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
							onClick: () => {
								setActivePage("tracks");
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							},
							style: {
								background: "none",
								border: "none",
								color: "#cbd5e1",
								cursor: "pointer",
								padding: 0,
								fontSize: "0.85rem"
							},
							children: "Generative AI & LLM Systems"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
							onClick: () => {
								setActivePage("tracks");
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							},
							style: {
								background: "none",
								border: "none",
								color: "#cbd5e1",
								cursor: "pointer",
								padding: 0,
								fontSize: "0.85rem"
							},
							children: "AI Full-Stack Engineering"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
							onClick: () => {
								setActivePage("tracks");
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							},
							style: {
								background: "none",
								border: "none",
								color: "#cbd5e1",
								cursor: "pointer",
								padding: 0,
								fontSize: "0.85rem"
							},
							children: "Data Engineering & Applied MLOps"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
							onClick: () => {
								setActivePage("production-lab");
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							},
							style: {
								background: "none",
								border: "none",
								color: "#cbd5e1",
								cursor: "pointer",
								padding: 0,
								fontSize: "0.85rem"
							},
							children: "Production Lab Residency"
						}) })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					style: {
						color: "#ffffff",
						fontSize: "0.9rem",
						fontWeight: 700,
						marginBottom: "1.2rem",
						textTransform: "uppercase",
						letterSpacing: "0.05em"
					},
					children: "Trust & Terms"
				}), /* @__PURE__ */ jsxs("ul", {
					style: {
						listStyle: "none",
						display: "flex",
						flexDirection: "column",
						gap: "0.75rem"
					},
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
							onClick: () => {
								setActivePage("isa");
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							},
							style: {
								background: "none",
								border: "none",
								color: "#cbd5e1",
								cursor: "pointer",
								padding: 0,
								fontSize: "0.85rem"
							},
							children: "Pay After Placement (ISA Model)"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
							onClick: onOpenISA,
							style: {
								background: "none",
								border: "none",
								color: "#cbd5e1",
								cursor: "pointer",
								padding: 0,
								fontSize: "0.85rem"
							},
							children: "Download Sample ISA Agreement"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
							onClick: () => {
								setActivePage("placements");
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							},
							style: {
								background: "none",
								border: "none",
								color: "#cbd5e1",
								cursor: "pointer",
								padding: 0,
								fontSize: "0.85rem"
							},
							children: "Third-Party Audited Offer Wall"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
							onClick: onOpenCounselor,
							style: {
								background: "none",
								border: "none",
								color: "#cbd5e1",
								cursor: "pointer",
								padding: 0,
								fontSize: "0.85rem"
							},
							children: "Schedule Admissions Call"
						}) })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("h4", {
						style: {
							color: "#ffffff",
							fontSize: "0.9rem",
							fontWeight: 700,
							marginBottom: "1.2rem",
							textTransform: "uppercase",
							letterSpacing: "0.05em"
						},
						children: "Admissions Hub"
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "0.82rem",
							marginBottom: "0.75rem",
							color: "#cbd5e1"
						},
						children: "Karka AI Engineering Lab, HSR Layout Sector 4, Bengaluru, Karnataka 560102"
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: "6px",
							fontSize: "0.82rem"
						},
						children: [
							/* @__PURE__ */ jsx("span", {
								style: { color: "#94a3b8" },
								children: "WhatsApp Admissions: +91 91764 89201"
							}),
							/* @__PURE__ */ jsx("span", {
								style: { color: "#94a3b8" },
								children: "Email: admissions@karka.ai"
							}),
							/* @__PURE__ */ jsx("span", {
								style: { color: "#94a3b8" },
								children: "Instagram: @karka.ai (Daily Offer Unboxings)"
							})
						]
					})
				] })
			]
		}), /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto",
				paddingTop: "2rem",
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "space-between",
				alignItems: "center",
				gap: "1rem",
				fontSize: "0.76rem",
				color: "#64748b"
			},
			children: [/* @__PURE__ */ jsx("div", { children: "© 2026 Karka Edu-Tech Services Pvt. Ltd. All rights reserved. Registered under the Indian Companies Act." }), /* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					gap: "1.5rem"
				},
				children: [
					/* @__PURE__ */ jsx("span", { children: "NBFC Partner Certified" }),
					/* @__PURE__ */ jsx("span", { children: "Zero Collateral Guarantee" }),
					/* @__PURE__ */ jsx("span", { children: "Terms of Service" }),
					/* @__PURE__ */ jsx("span", { children: "Privacy Policy" })
				]
			})]
		})]
	});
}
// src/api/mockApi.js
const LATENCY_MS = 650;
const delay = (ms = LATENCY_MS) => new Promise((resolve) => setTimeout(resolve, ms));
var ApiEventBus = class {
	constructor() {
		this.listeners = [];
	}
	subscribe(listener) {
		this.listeners.push(listener);
		return () => {
			this.listeners = this.listeners.filter((l) => l !== listener);
		};
	}
	notify(log) {
		this.listeners.forEach((listener) => listener(log));
	}
};
const apiEvents = new ApiEventBus();
function logApiCall(method, endpoint, status, reqData, resData, duration) {
	const logItem = {
		id: "REQ_" + Math.random().toString(36).substring(2, 9).toUpperCase(),
		timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
		method,
		endpoint,
		status,
		reqData,
		resData,
		duration: Math.round(duration) + "ms"
	};
	apiEvents.notify(logItem);
	return logItem;
}
const STORAGE_KEYS = {
	APPLICATIONS: "karka_db_applications",
	ELIGIBILITY_CHECKS: "karka_db_eligibility",
	ADVISOR_CALLS: "karka_db_advisor_calls"
};
function getStorage(key, defaultValue = []) {
	try {
		const raw = localStorage.getItem(key);
		return raw ? JSON.parse(raw) : defaultValue;
	} catch (e) {
		return defaultValue;
	}
}
function saveStorage(key, data) {
	try {
		localStorage.setItem(key, JSON.stringify(data));
	} catch (e) {
		console.error("Storage write error", e);
	}
}
const MockAPI = {
	async checkEligibility(payload) {
		const startTime = performance.now();
		await delay(500);
		const { qualification, graduationYear, targetTrack, whatsappNumber } = payload;
		if (!whatsappNumber || whatsappNumber.trim().length < 10) {
			const duration = performance.now() - startTime;
			const errorRes = {
				success: false,
				statusCode: 422,
				error: "Please enter a valid 10-digit WhatsApp number."
			};
			logApiCall("POST", "/api/v1/eligibility/check", 422, payload, errorRes, duration);
			throw new Error(errorRes.error);
		}
		let score = 92;
		if (graduationYear === "2025" || graduationYear === "2026" || graduationYear === "2024") score += 5;
		whatsappNumber.replace(/\D/g, "").slice(-10);
		const result = {
			success: true,
			statusCode: 200,
			candidateId: `KRA-ELG-${Math.floor(1e5 + Math.random() * 9e5)}`,
			status: "PRE-QUALIFIED",
			eligibilityScore: Math.min(score, 99),
			papGuaranteeEligible: true,
			incomeThreshold: "₹5,00,000 / year (₹5.0 LPA)",
			tuitionDueUpfront: "₹0 (Zero Upfront Tuition)",
			maxRepaymentCap: "₹2,40,000 maximum over 16 months",
			recommendedTrack: targetTrack || "AI Full-Stack Engineering",
			cohortStartDate: "November 15, 2026",
			remainingCohortSeats: 7,
			roadmapPdfUrl: "/roadmaps/karka-ai-curriculum-roadmap-2026.pdf",
			nextStep: "Schedule 90-Minute Technical Assessment Test"
		};
		const records = getStorage(STORAGE_KEYS.ELIGIBILITY_CHECKS);
		records.unshift({
			...payload,
			result,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		});
		saveStorage(STORAGE_KEYS.ELIGIBILITY_CHECKS, records.slice(0, 50));
		logApiCall("POST", "/api/v1/eligibility/check", 200, payload, result, performance.now() - startTime);
		return result;
	},
	async submitAssessment(payload) {
		const startTime = performance.now();
		await delay(700);
		const { fullName, email, whatsapp, track, experienceLevel, githubProfile } = payload;
		if (!fullName || !email || !whatsapp) {
			const duration = performance.now() - startTime;
			const errorRes = {
				success: false,
				statusCode: 400,
				error: "Full name, email, and WhatsApp number are required."
			};
			logApiCall("POST", "/api/v1/assessment/apply", 400, payload, errorRes, duration);
			throw new Error(errorRes.error);
		}
		const applicationNumber = `KRA-2026-APP-${Math.floor(1e4 + Math.random() * 9e4)}`;
		const response = {
			success: true,
			statusCode: 201,
			applicationId: applicationNumber,
			applicantName: fullName,
			trackApplied: track || "AI Full-Stack Engineering",
			assessmentDetails: {
				format: "90-Minute Live Coding & Algorithmic Architecture Challenge",
				proctoring: "Browser-based Automated Sandbox Environment",
				passBenchmark: "65% minimum technical threshold",
				testAccessExpiresIn: "48 Hours",
				testLink: `https://assessment.karka.ai/invite/${applicationNumber.toLowerCase()}`
			},
			message: "Assessment link successfully dispatched via WhatsApp & Email.",
			timestamp: (/* @__PURE__ */ new Date()).toISOString()
		};
		const apps = getStorage(STORAGE_KEYS.APPLICATIONS);
		apps.unshift({
			...payload,
			response,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		});
		saveStorage(STORAGE_KEYS.APPLICATIONS, apps.slice(0, 50));
		logApiCall("POST", "/api/v1/assessment/apply", 201, payload, response, performance.now() - startTime);
		return response;
	},
	async bookAdvisorCall(payload) {
		const startTime = performance.now();
		await delay(500);
		const { name, phone, slotTime, queryTopic } = payload;
		if (!name || !phone) {
			const duration = performance.now() - startTime;
			const errorRes = {
				success: false,
				statusCode: 400,
				error: "Name and phone are mandatory."
			};
			logApiCall("POST", "/api/v1/admissions/schedule-call", 400, payload, errorRes, duration);
			throw new Error(errorRes.error);
		}
		const response = {
			success: true,
			statusCode: 200,
			bookingReference: `KRA-CALL-${Math.floor(1e3 + Math.random() * 9e3)}`,
			confirmedTime: slotTime || "Tomorrow at 4:30 PM IST",
			assignedAdvisor: "S. Ramanathan (Senior Admissions Lead & Ex-Amazon Architect)",
			contactNumber: phone,
			whatsappConfirmationSent: true
		};
		const calls = getStorage(STORAGE_KEYS.ADVISOR_CALLS);
		calls.unshift({
			...payload,
			response,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		});
		saveStorage(STORAGE_KEYS.ADVISOR_CALLS, calls.slice(0, 50));
		logApiCall("POST", "/api/v1/admissions/schedule-call", 200, payload, response, performance.now() - startTime);
		return response;
	},
	async getLiveTelemetry() {
		const startTime = performance.now();
		await delay(250);
		const stats = {
			activeCohortSeats: 15,
			seatsClaimed: 11,
			seatsRemaining: 4,
			liveAuditCommitStream: 1424,
			testSuitePassRate: "99.2%",
			kubernetesStagingStatus: "HEALTHY",
			productionDeployments: 12,
			averagePlacementCtc: "₹8.4 LPA",
			highestSalaryPlaced: "₹21.0 LPA",
			totalActiveApprentices: 142
		};
		logApiCall("GET", "/api/v1/telemetry/live", 200, null, stats, performance.now() - startTime);
		return stats;
	}
};
// src/components/CompanyLogos.jsx
const GoogleCloudLogo = ({ size = 22 }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	style: { flexShrink: 0 },
	children: [
		/* @__PURE__ */ jsx("path", {
			d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96Z",
			fill: "#4285F4"
		}),
		/* @__PURE__ */ jsx("path", {
			d: "M12 4c2.03 0 3.87.82 5.21 2.15l-1.9 1.9A4.47 4.47 0 0 0 12 6.8c-2.43 0-4.42 1.95-4.49 4.37l-2.65-.67C5.8 7.65 8.65 4 12 4Z",
			fill: "#EA4335"
		}),
		/* @__PURE__ */ jsx("path", {
			d: "M19.35 10.04c.42.92.65 1.94.65 3.01 0 .68-.1 1.34-.3 1.95h-5.2v-2.8h2.6c-.37-.99-1.12-1.78-2.08-2.18l1.8-1.9c1.55.9 2.5 2.25 2.83 4.12Z",
			fill: "#FBBC05"
		}),
		/* @__PURE__ */ jsx("path", {
			d: "M6 20h13c1.78 0 3.31-.96 4.12-2.39l-2.1-1.68c-.46.72-1.25 1.25-2.17 1.25H6c-1.71 0-3.13-1.12-3.64-2.67l-2.75.61C.58 17.65 3.05 20 6 20Z",
			fill: "#34A853"
		})
	]
});
const MicrosoftLogo = ({ size = 20 }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 21 21",
	fill: "none",
	style: { flexShrink: 0 },
	children: [
		/* @__PURE__ */ jsx("rect", {
			x: "0",
			y: "0",
			width: "9.5",
			height: "9.5",
			fill: "#F25022"
		}),
		/* @__PURE__ */ jsx("rect", {
			x: "11.5",
			y: "0",
			width: "9.5",
			height: "9.5",
			fill: "#7FBA00"
		}),
		/* @__PURE__ */ jsx("rect", {
			x: "0",
			y: "11.5",
			width: "9.5",
			height: "9.5",
			fill: "#00A4EF"
		}),
		/* @__PURE__ */ jsx("rect", {
			x: "11.5",
			y: "11.5",
			width: "9.5",
			height: "9.5",
			fill: "#FFB900"
		})
	]
});
const RazorpayLogo = ({ size = 22 }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	style: { flexShrink: 0 },
	children: [/* @__PURE__ */ jsx("path", {
		d: "M13.8 2.5 4.5 13.1c-.34.39-.12 1.02.4 1.07l5.3.45-3.3 7.4c-.3.68.53 1.28 1.07.77L19.2 9.8c.4-.38.16-1.07-.39-1.1l-5.6-.33 2.1-5.1c.23-.58-.45-1.12-.92-.74Z",
		fill: "#0C2340"
	}), /* @__PURE__ */ jsx("path", {
		d: "m12.8 5.6-6.2 7.1 4.3.36-2.7 6.1 9.2-8.6-4.5-.26 2.1-4.7H12.8Z",
		fill: "#0082FF"
	})]
});
const ZohoLogo = ({ size = 22 }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 28 28",
	fill: "none",
	style: { flexShrink: 0 },
	children: [
		/* @__PURE__ */ jsx("rect", {
			x: "1.5",
			y: "1.5",
			width: "10.5",
			height: "10.5",
			rx: "2.5",
			fill: "#E42528"
		}),
		/* @__PURE__ */ jsx("rect", {
			x: "16",
			y: "1.5",
			width: "10.5",
			height: "10.5",
			rx: "2.5",
			fill: "#226AB2"
		}),
		/* @__PURE__ */ jsx("rect", {
			x: "1.5",
			y: "16",
			width: "10.5",
			height: "10.5",
			rx: "2.5",
			fill: "#4B9B42"
		}),
		/* @__PURE__ */ jsx("rect", {
			x: "16",
			y: "16",
			width: "10.5",
			height: "10.5",
			rx: "2.5",
			fill: "#F49320"
		})
	]
});
const SwiggyLogo = ({ size = 22 }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	style: { flexShrink: 0 },
	children: [/* @__PURE__ */ jsx("path", {
		d: "M12 2C7.58 2 4 5.58 4 10c0 5.25 7.05 11.52 7.35 11.78.38.33.92.33 1.3 0C12.95 21.52 20 15.25 20 10c0-4.42-3.58-8-8-8Z",
		fill: "#FC8019"
	}), /* @__PURE__ */ jsx("path", {
		d: "M14.8 7.8c-.3-.4-.8-.6-1.4-.6-.9 0-1.7.5-2 1.4-.2.5-.1 1.1.2 1.4l2.1 1.8c.6.5.7 1.4.3 2-.3.5-.9.8-1.5.8-.8 0-1.5-.4-1.8-1.1-.1-.3-.4-.4-.7-.4s-.5.2-.6.5c.4 1.1 1.4 1.8 2.6 1.8 1.1 0 2.1-.6 2.5-1.6.4-.9.2-1.9-.5-2.5l-2.1-1.8c-.4-.4-.5-.9-.3-1.3.2-.5.7-.8 1.2-.8.6 0 1.1.3 1.3.8.1.3.4.5.7.4.3-.1.5-.4.4-.7l-.4-.4Z",
		fill: "#FFFFFF"
	})]
});
const FreshworksLogo = ({ size = 22 }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	style: { flexShrink: 0 },
	children: [
		/* @__PURE__ */ jsx("circle", {
			cx: "8",
			cy: "8",
			r: "4.2",
			fill: "#FF5E3A"
		}),
		/* @__PURE__ */ jsx("circle", {
			cx: "16",
			cy: "8",
			r: "4.2",
			fill: "#FFA500"
		}),
		/* @__PURE__ */ jsx("circle", {
			cx: "8",
			cy: "16",
			r: "4.2",
			fill: "#00D285"
		}),
		/* @__PURE__ */ jsx("circle", {
			cx: "16",
			cy: "16",
			r: "4.2",
			fill: "#00A2FF"
		})
	]
});
const PostmanLogo = ({ size = 22 }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	style: { flexShrink: 0 },
	children: [
		/* @__PURE__ */ jsx("circle", {
			cx: "12",
			cy: "12",
			r: "10",
			fill: "#FF6C37"
		}),
		/* @__PURE__ */ jsx("path", {
			d: "M7 12.5 16 7l-4.5 9.5L10 13l-3-.5Z",
			fill: "#FFFFFF"
		}),
		/* @__PURE__ */ jsx("circle", {
			cx: "14",
			cy: "9.5",
			r: "1.5",
			fill: "#FFFFFF"
		})
	]
});
const FlipkartLogo = ({ size = 22 }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	style: { flexShrink: 0 },
	children: [
		/* @__PURE__ */ jsx("rect", {
			x: "3.5",
			y: "5",
			width: "17",
			height: "16",
			rx: "3",
			fill: "#2874F0"
		}),
		/* @__PURE__ */ jsx("path", {
			d: "M12 2.5a3.5 3.5 0 0 0-3.5 3.5v1h2V6a1.5 1.5 0 1 1 3 0v1h2V6a3.5 3.5 0 0 0-3.5-3.5Z",
			fill: "#F7CA18"
		}),
		/* @__PURE__ */ jsx("path", {
			d: "M9 10.5h6v1.8h-3.8v1.6h3.2v1.8h-3.2v3.8H9v-9Z",
			fill: "#F7CA18"
		})
	]
});
const ChargebeeLogo = ({ size = 22 }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	style: { flexShrink: 0 },
	children: [
		/* @__PURE__ */ jsx("circle", {
			cx: "12",
			cy: "12",
			r: "10",
			fill: "#7B1FA2"
		}),
		/* @__PURE__ */ jsx("path", {
			d: "M16 11c0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.8 1.2 3.3 2.8 3.8L12 18l1.2-3.2c1.6-.5 2.8-2 2.8-3.8Z",
			fill: "#FF9800"
		}),
		/* @__PURE__ */ jsx("circle", {
			cx: "10.2",
			cy: "10",
			r: "0.9",
			fill: "#FFFFFF"
		}),
		/* @__PURE__ */ jsx("circle", {
			cx: "13.8",
			cy: "10",
			r: "0.9",
			fill: "#FFFFFF"
		})
	]
});
const JuspayLogo = ({ size = 22 }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	style: { flexShrink: 0 },
	children: [/* @__PURE__ */ jsx("path", {
		d: "M12 2 4.5 12 12 22l7.5-10L12 2Z",
		fill: "#00B0FF"
	}), /* @__PURE__ */ jsx("path", {
		d: "m11 7-3 6h4l-1 5 5-6h-4l2-5h-3Z",
		fill: "#FFFFFF"
	})]
});
const alumniPartners = [
	{
		name: "Google Cloud",
		logo: GoogleCloudLogo,
		color: "#0f172a"
	},
	{
		name: "Microsoft",
		logo: MicrosoftLogo,
		color: "#0f172a"
	},
	{
		name: "Razorpay",
		logo: RazorpayLogo,
		color: "#0C2340"
	},
	{
		name: "Zoho",
		logo: ZohoLogo,
		color: "#0f172a"
	},
	{
		name: "SWIGGY",
		logo: SwiggyLogo,
		color: "#FC8019"
	},
	{
		name: "Freshworks",
		logo: FreshworksLogo,
		color: "#0f172a"
	},
	{
		name: "POSTMAN",
		logo: PostmanLogo,
		color: "#FF6C37"
	}
];
const allEcosystemPartners = [
	{
		name: "Google Cloud",
		subtitle: "Cloud Infrastructure",
		logo: GoogleCloudLogo
	},
	{
		name: "Microsoft Azure",
		subtitle: "Azure AI Labs",
		logo: MicrosoftLogo
	},
	{
		name: "Razorpay",
		subtitle: "Financial Engineering",
		logo: RazorpayLogo
	},
	{
		name: "Zoho Corp",
		subtitle: "Enterprise SaaS",
		logo: ZohoLogo
	},
	{
		name: "Swiggy",
		subtitle: "Logistics & ML",
		logo: SwiggyLogo
	},
	{
		name: "Freshworks",
		subtitle: "CRM Core Systems",
		logo: FreshworksLogo
	},
	{
		name: "Postman",
		subtitle: "API Platform",
		logo: PostmanLogo
	},
	{
		name: "Flipkart",
		subtitle: "Distributed Systems",
		logo: FlipkartLogo
	},
	{
		name: "Chargebee",
		subtitle: "Subscription Billing",
		logo: ChargebeeLogo
	},
	{
		name: "Juspay",
		subtitle: "High-TPS Rails",
		logo: JuspayLogo
	}
];
// src/pages/HomePage.jsx
function HomePage({ setActivePage, onOpenAssessment, onOpenSyllabus, showToast }) {
	const [terminalLogs, setTerminalLogs] = useState([
		"[08:14:02] Initializing Karka AgentMesh orchestration...",
		"[08:14:03] [OK] Qdrant vector database connection verified (8.4ms)",
		"[08:14:04] [OK] Autonomous LangGraph agent worker deployed (3,200 rps)",
		"[08:14:05] [OK] Multi-modal agent swarm ready on cluster vLLM-H100",
		"[08:14:06] [LIVE] Production System active: 99.98% uptime"
	]);
	useEffect(() => {
		const streamInterval = setInterval(() => {
			const liveEvents = [
				`[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] [INFERENCE] Dispatched query embeddings via PyTorch vLLM`,
				`[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] [AGENT] Sub-agent 03 verified schema compliance: 0 errors`,
				`[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] [PR REVIEW] Auto-linter approved pull request #489`,
				`[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] [CACHE] Redis hit ratio stabilized at 98.4%`
			];
			const randomEvent = liveEvents[Math.floor(Math.random() * liveEvents.length)];
			setTerminalLogs((prev) => [...prev.slice(-5), randomEvent]);
		}, 4500);
		return () => clearInterval(streamInterval);
	}, []);
	const [elgData, setElgData] = useState({
		qualification: "B.Tech / BE (Computer Science / IT)",
		graduationYear: "2025 (Graduating This Year)",
		targetTrack: "AI Full-Stack Engineering (Backend + LLMs)",
		whatsappNumber: ""
	});
	const [elgLoading, setElgLoading] = useState(false);
	const [elgResult, setElgResult] = useState(null);
	const handleEligibilitySubmit = async (e) => {
		e.preventDefault();
		if (!elgData.whatsappNumber || elgData.whatsappNumber.length < 10) {
			showToast("Please enter a valid 10-digit WhatsApp number.", "error");
			return;
		}
		setElgLoading(true);
		try {
			const res = await MockAPI.checkEligibility(elgData);
			setElgResult(res);
			showToast("PAP Eligibility Pre-Approved! Check your roadmap.", "success");
		} catch (err) {
			showToast(err.message || "Check failed. Try again.", "error");
		} finally {
			setElgLoading(false);
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		style: { width: "100%" },
		children: [
			/* @__PURE__ */ jsxs("section", {
				style: {
					position: "relative",
					padding: "4rem 1.5rem 3.5rem",
					maxWidth: "1280px",
					margin: "0 auto",
					textAlign: "center"
				},
				className: "hero-section",
				children: [
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "inline-flex",
							alignItems: "center",
							gap: "8px",
							backgroundColor: "#ffffff",
							border: "1px solid #bfdbfe",
							boxShadow: "0 4px 14px rgba(37, 99, 235, 0.12)",
							padding: "6px 16px",
							borderRadius: "9999px",
							fontSize: "0.82rem",
							fontWeight: 700,
							color: "#1d4ed8",
							marginBottom: "1.75rem"
						},
						className: "animate-fade-in hero-cohort-badge",
						children: [
							/* @__PURE__ */ jsx("span", {
								style: {
									width: "8px",
									height: "8px",
									borderRadius: "50%",
									backgroundColor: "#2563eb"
								},
								className: "animate-live-dot"
							}),
							/* @__PURE__ */ jsx("span", { children: "NEXT COHORT: 15 SEATS ONLY" }),
							/* @__PURE__ */ jsx("span", {
								style: { color: "#cbd5e1" },
								children: "•"
							}),
							/* @__PURE__ */ jsx("span", {
								style: {
									color: "#059669",
									fontWeight: 800
								},
								children: "Pay After Placement"
							})
						]
					}),
					/* @__PURE__ */ jsxs("h1", {
						style: {
							fontSize: "clamp(2.3rem, 5.5vw, 4.2rem)",
							fontWeight: 800,
							lineHeight: 1.12,
							letterSpacing: "-0.03em",
							color: "#0f172a",
							maxWidth: "920px",
							margin: "0 auto 1.25rem"
						},
						className: "hero-title",
						children: [
							"Launch Your AI Career. ",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								style: {
									background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #0284c7 100%)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent"
								},
								children: "Pay Only After ₹5+ LPA."
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "clamp(1rem, 1.8vw, 1.22rem)",
							color: "#475569",
							maxWidth: "720px",
							margin: "0 auto 2.25rem",
							lineHeight: 1.6
						},
						className: "hero-description",
						children: "India's most selective real AI engineering school. Master production autonomous agents and full-stack architecture with zero upfront tuition."
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "1rem",
							flexWrap: "wrap",
							marginBottom: "2.5rem"
						},
						children: [/* @__PURE__ */ jsxs("button", {
							onClick: onOpenAssessment,
							className: "btn-primary",
							style: {
								padding: "0.85rem 1.8rem",
								fontSize: "1rem",
								borderRadius: "10px",
								boxShadow: "0 8px 24px rgba(37, 99, 235, 0.35)"
							},
							children: [/* @__PURE__ */ jsx("span", { children: "Apply for Free Assessment" }), /* @__PURE__ */ jsx(ArrowRight, { style: {
								width: 16,
								height: 16
							} })]
						}), /* @__PURE__ */ jsx("button", {
							onClick: () => {
								setActivePage("tracks");
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							},
							className: "btn-secondary",
							style: {
								padding: "0.85rem 1.8rem",
								fontSize: "1rem",
								borderRadius: "10px"
							},
							children: "View Curriculum"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "1.5rem",
							flexWrap: "wrap",
							fontSize: "0.85rem",
							fontWeight: 600,
							color: "#334155",
							marginBottom: "3rem"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: "6px"
								},
								children: [
									/* @__PURE__ */ jsx("span", {
										style: {
											color: "#f59e0b",
											display: "flex"
										},
										children: /* @__PURE__ */ jsx(Star, { style: {
											width: 16,
											height: 16
										} })
									}),
									/* @__PURE__ */ jsx("strong", {
										style: { color: "#0f172a" },
										children: "4.9 / 5.0"
									}),
									/* @__PURE__ */ jsx("span", {
										style: { color: "#64748b" },
										children: "(1,500+ Engineers Trained)"
									})
								]
							}),
							/* @__PURE__ */ jsx("span", {
								style: { color: "#cbd5e1" },
								children: "•"
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: "6px"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										color: "#2563eb",
										fontWeight: 800
									},
									children: "₹8.4 LPA"
								}), /* @__PURE__ */ jsx("span", {
									style: { color: "#64748b" },
									children: "Average CTC"
								})]
							}),
							/* @__PURE__ */ jsx("span", {
								style: { color: "#cbd5e1" },
								children: "•"
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: "6px"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										color: "#059669",
										fontWeight: 800
									},
									children: "94.8%"
								}), /* @__PURE__ */ jsx("span", {
									style: { color: "#64748b" },
									children: "Verified Placement"
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							maxWidth: "1020px",
							margin: "0 auto",
							borderRadius: "16px",
							overflow: "hidden",
							border: "1px solid #1e293b",
							boxShadow: "0 25px 60px -15px rgba(15, 23, 42, 0.4), 0 0 40px rgba(37, 99, 235, 0.1)",
							backgroundColor: "#0a0f1d",
							textAlign: "left"
						},
						children: [/* @__PURE__ */ jsxs("div", {
							style: {
								padding: "12px 18px",
								backgroundColor: "#0f172a",
								borderBottom: "1px solid #1e293b",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								flexWrap: "wrap",
								gap: "10px"
							},
							children: [/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: "8px"
								},
								children: [/* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										gap: "6px"
									},
									children: [
										/* @__PURE__ */ jsx("span", { style: {
											width: 11,
											height: 11,
											borderRadius: "50%",
											backgroundColor: "#ef4444"
										} }),
										/* @__PURE__ */ jsx("span", { style: {
											width: 11,
											height: 11,
											borderRadius: "50%",
											backgroundColor: "#f59e0b"
										} }),
										/* @__PURE__ */ jsx("span", { style: {
											width: 11,
											height: 11,
											borderRadius: "50%",
											backgroundColor: "#10b981"
										} })
									]
								}), /* @__PURE__ */ jsxs("span", {
									style: {
										fontFamily: "var(--font-mono)",
										fontSize: "0.8rem",
										color: "#94a3b8",
										marginLeft: "8px"
									},
									children: ["karka_agentic_app / ", /* @__PURE__ */ jsx("span", {
										style: { color: "#38bdf8" },
										children: "production_agent.py"
									})]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: "10px",
									fontSize: "0.72rem",
									fontFamily: "var(--font-mono)"
								},
								children: [/* @__PURE__ */ jsxs("span", {
									style: {
										backgroundColor: "#064e3b",
										color: "#34d399",
										padding: "3px 8px",
										borderRadius: "9999px",
										fontWeight: 600,
										display: "flex",
										alignItems: "center",
										gap: "4px"
									},
									children: [/* @__PURE__ */ jsx("span", {
										style: {
											width: 6,
											height: 6,
											borderRadius: "50%",
											backgroundColor: "#34d399"
										},
										className: "animate-live-dot"
									}), "ACTIVE SWARM"]
								}), /* @__PURE__ */ jsx("span", {
									style: { color: "#64748b" },
									children: "vLLM • H100"
								})]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
								gap: "0"
							},
							children: [/* @__PURE__ */ jsxs("div", {
								style: {
									padding: "1.25rem 1.5rem",
									fontFamily: "var(--font-mono)",
									fontSize: "0.82rem",
									lineHeight: 1.7,
									color: "#e2e8f0",
									borderRight: "1px solid #1e293b",
									background: "#090d18"
								},
								children: [
									/* @__PURE__ */ jsx("div", {
										style: {
											color: "#64748b",
											marginBottom: "8px"
										},
										children: "# Autonomous Multi-Agent Orchestration — Karka Lab Build"
									}),
									/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("span", {
											className: "code-keyword",
											children: "from"
										}),
										" karka_tech ",
										/* @__PURE__ */ jsx("span", {
											className: "code-keyword",
											children: "import"
										}),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "code-tag",
											children: "AgentMesh, QdrantStore"
										})
									] }),
									/* @__PURE__ */ jsxs("div", {
										style: { marginTop: "4px" },
										children: [
											"mesh = ",
											/* @__PURE__ */ jsx("span", {
												className: "code-fn",
												children: "AgentMesh"
											}),
											"(",
											/* @__PURE__ */ jsx("span", {
												className: "code-string",
												children: "clusters=\"vLLM-H100\""
											}),
											", zero_upfront=",
											/* @__PURE__ */ jsx("span", {
												className: "code-keyword",
												children: "True"
											}),
											")"
										]
									}),
									/* @__PURE__ */ jsx("div", {
										style: { marginTop: "8px" },
										children: /* @__PURE__ */ jsx("span", {
											className: "code-keyword",
											children: "@mesh.listen"
										})
									}),
									/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("span", {
											className: "code-keyword",
											children: "async def"
										}),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "code-fn",
											children: "dispatch"
										}),
										"(pr):"
									] }),
									/* @__PURE__ */ jsxs("div", {
										style: { paddingLeft: "1.5rem" },
										children: [
											"embeddings = ",
											/* @__PURE__ */ jsx("span", {
												className: "code-keyword",
												children: "await"
											}),
											" pr.",
											/* @__PURE__ */ jsx("span", {
												className: "code-fn",
												children: "embed"
											}),
											"(vector_search=",
											/* @__PURE__ */ jsx("span", {
												className: "code-keyword",
												children: "True"
											}),
											")"
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										style: { paddingLeft: "1.5rem" },
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "code-keyword",
												children: "return"
											}),
											" {",
											/* @__PURE__ */ jsx("span", {
												className: "code-string",
												children: "\"status\""
											}),
											": ",
											/* @__PURE__ */ jsx("span", {
												className: "code-string",
												children: "\"DEPLOYED\""
											}),
											",",
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "code-string",
												children: "\"latency\""
											}),
											": ",
											/* @__PURE__ */ jsx("span", {
												className: "code-string",
												children: "\"0.08s\""
											}),
											"}"
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										style: {
											marginTop: "1.25rem",
											paddingTop: "0.85rem",
											borderTop: "1px solid #1e293b",
											fontSize: "0.74rem",
											color: "#64748b",
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center"
										},
										children: [/* @__PURE__ */ jsx("span", { children: "Production Framework: Python 3.12 + FastAPI + LangGraph" }), /* @__PURE__ */ jsx("span", {
											style: { color: "#38bdf8" },
											children: "app.karka.sh"
										})]
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								style: {
									padding: "1.25rem 1.5rem",
									background: "#070b13",
									fontFamily: "var(--font-mono)",
									fontSize: "0.76rem",
									lineHeight: 1.8,
									color: "#94a3b8",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between"
								},
								children: [/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("div", {
										style: {
											color: "#38bdf8",
											fontWeight: 700,
											marginBottom: "8px",
											fontSize: "0.75rem"
										},
										children: "// LIVE CLUSTER RUNTIME TELEMETRY:"
									}),
									terminalLogs.map((log, i) => /* @__PURE__ */ jsx("div", {
										style: { color: log.includes("[OK]") ? "#86efac" : log.includes("[LIVE]") ? "#38bdf8" : "#94a3b8" },
										children: log
									}, i)),
									/* @__PURE__ */ jsxs("div", {
										style: {
											display: "flex",
											alignItems: "center",
											gap: "4px",
											color: "#38bdf8",
											marginTop: "4px"
										},
										children: [/* @__PURE__ */ jsx("span", { children: "> waiting for telemetry pulse" }), /* @__PURE__ */ jsx("span", {
											className: "animate-cursor",
											children: "_"
										})]
									})
								] }), /* @__PURE__ */ jsxs("div", {
									style: {
										marginTop: "1rem",
										padding: "8px 12px",
										background: "rgba(15, 23, 42, 0.8)",
										borderRadius: "8px",
										border: "1px solid #1e293b",
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center"
									},
									children: [/* @__PURE__ */ jsx("span", {
										style: {
											color: "#64748b",
											fontSize: "0.7rem"
										},
										children: "Cluster Status: Healthy"
									}), /* @__PURE__ */ jsx("span", {
										style: {
											color: "#10b981",
											fontWeight: 600
										},
										children: "0 Client Outages"
									})]
								})]
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							marginTop: "3.5rem",
							borderTop: "1px solid #e2e8f0",
							paddingTop: "2.5rem"
						},
						children: [/* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "0.76rem",
								fontWeight: 700,
								textTransform: "uppercase",
								letterSpacing: "0.08em",
								color: "#94a3b8",
								marginBottom: "1.75rem"
							},
							children: "WHERE OUR ALUMNI ENGINEER PRODUCTION SYSTEMS"
						}), /* @__PURE__ */ jsx("div", {
							style: {
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "clamp(1.5rem, 3.2vw, 2.75rem)",
								flexWrap: "wrap"
							},
							children: alumniPartners.map((partner, idx) => {
								const LogoComponent = partner.logo;
								return /* @__PURE__ */ jsxs("div", {
									style: {
										display: "inline-flex",
										alignItems: "center",
										gap: "10px",
										padding: "8px 14px",
										borderRadius: "10px",
										background: "rgba(255, 255, 255, 0.65)",
										border: "1px solid rgba(226, 232, 240, 0.7)",
										transition: "all 0.2s ease",
										cursor: "default",
										boxShadow: "0 1px 3px rgba(0, 0, 0, 0.02)"
									},
									onMouseEnter: (e) => {
										e.currentTarget.style.transform = "translateY(-2px)";
										e.currentTarget.style.backgroundColor = "#ffffff";
										e.currentTarget.style.boxShadow = "0 6px 18px rgba(15, 23, 42, 0.08)";
										e.currentTarget.style.borderColor = "#cbd5e1";
									},
									onMouseLeave: (e) => {
										e.currentTarget.style.transform = "translateY(0)";
										e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.65)";
										e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.02)";
										e.currentTarget.style.borderColor = "rgba(226, 232, 240, 0.7)";
									},
									children: [/* @__PURE__ */ jsx(LogoComponent, { size: 22 }), /* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "1rem",
											fontWeight: 800,
											color: "#1e293b",
											letterSpacing: "-0.02em",
											whiteSpace: "nowrap"
										},
										children: partner.name
									})]
								}, idx);
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				style: {
					padding: "4rem 1.5rem",
					maxWidth: "1280px",
					margin: "0 auto"
				},
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						textAlign: "center",
						marginBottom: "3rem"
					},
					children: [
						/* @__PURE__ */ jsx("span", {
							style: {
								fontSize: "0.74rem",
								fontWeight: 700,
								textTransform: "uppercase",
								letterSpacing: "0.06em",
								color: "#2563eb",
								background: "#eff6ff",
								padding: "4px 12px",
								borderRadius: "9999px"
							},
							children: "THE KARKA DIFFERENCE"
						}),
						/* @__PURE__ */ jsx("h2", {
							style: {
								fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
								fontWeight: 800,
								color: "#0f172a",
								letterSpacing: "-0.02em",
								marginTop: "12px"
							},
							children: "Engineered for Career Velocity, Not Lecture Hours."
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								color: "#64748b",
								fontSize: "1rem",
								maxWidth: "650px",
								margin: "8px auto 0"
							},
							children: "Zero passive video watching. We operate like a high-speed engineering agency where our incentives align with your career success."
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						gap: "1.5rem"
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "karka-card",
							style: { padding: "2rem" },
							children: [
								/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.72rem",
										fontWeight: 800,
										color: "#2563eb",
										background: "#eff6ff",
										padding: "3px 8px",
										borderRadius: "6px",
										display: "inline-block",
										marginBottom: "1rem"
									},
									children: "PILLAR 01"
								}),
								/* @__PURE__ */ jsx("h3", {
									style: {
										fontSize: "1.25rem",
										fontWeight: 800,
										color: "#0f172a",
										marginBottom: "8px"
									},
									children: "Pay After Placement (PAP)"
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: "0.88rem",
										color: "#64748b",
										lineHeight: 1.6,
										marginBottom: "1.25rem"
									},
									children: "₹0 upfront tuition. Study full-time without financial stress. Repay a structured share percentage only after you secure an engineering role paying ≥ ₹5.0 LPA."
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "0.78rem",
										color: "#059669",
										background: "#ecfdf5",
										padding: "8px 12px",
										borderRadius: "8px",
										fontWeight: 600
									},
									children: "Guaranteed Protection: If you don't land a job in 6 months, you owe ₹0."
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "karka-card",
							style: { padding: "2rem" },
							children: [
								/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.72rem",
										fontWeight: 800,
										color: "#d97706",
										background: "#fffbeb",
										padding: "3px 8px",
										borderRadius: "6px",
										display: "inline-block",
										marginBottom: "1rem"
									},
									children: "PILLAR 02"
								}),
								/* @__PURE__ */ jsx("h3", {
									style: {
										fontSize: "1.25rem",
										fontWeight: 800,
										color: "#0f172a",
										marginBottom: "8px"
									},
									children: "Production Agency Model"
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: "0.88rem",
										color: "#64748b",
										lineHeight: 1.6,
										marginBottom: "1.25rem"
									},
									children: "No toy todo lists or clone apps. Commit code directly to real multi-tenant agent architectures, latency-sensitive microservices, and live partner clinic deployments."
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "0.78rem",
										color: "#d97706",
										background: "#fffbeb",
										padding: "8px 12px",
										borderRadius: "8px",
										fontWeight: 600
									},
									children: "Client Exposure: Real enterprise telemetry, CICD, and live production releases."
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "karka-card",
							style: { padding: "2rem" },
							children: [
								/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.72rem",
										fontWeight: 800,
										color: "#059669",
										background: "#ecfdf5",
										padding: "3px 8px",
										borderRadius: "6px",
										display: "inline-block",
										marginBottom: "1rem"
									},
									children: "PILLAR 03"
								}),
								/* @__PURE__ */ jsx("h3", {
									style: {
										fontSize: "1.25rem",
										fontWeight: 800,
										color: "#0f172a",
										marginBottom: "8px"
									},
									children: "1-on-1 Staff Mentorship"
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: "0.88rem",
										color: "#64748b",
										lineHeight: 1.6,
										marginBottom: "1.25rem"
									},
									children: "Line-by-line PR reviews from Staff Engineers. Weekly video critiques, system design teardowns, and rigorous technical interview simulations."
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "0.78rem",
										color: "#2563eb",
										background: "#eff6ff",
										padding: "8px 12px",
										borderRadius: "8px",
										fontWeight: 600
									},
									children: "Outcome Support: Mock technical rounds and direct hiring partner referrals."
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				style: {
					padding: "4rem 1.5rem",
					backgroundColor: "#f1f5f9",
					borderTop: "1px solid #e2e8f0",
					borderBottom: "1px solid #e2e8f0"
				},
				children: /* @__PURE__ */ jsxs("div", {
					style: {
						maxWidth: "1280px",
						margin: "0 auto"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							justifyContent: "space-between",
							alignItems: "flex-end",
							flexWrap: "wrap",
							gap: "1rem",
							marginBottom: "2.5rem"
						},
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("span", {
								style: {
									fontSize: "0.74rem",
									fontWeight: 700,
									textTransform: "uppercase",
									letterSpacing: "0.06em",
									color: "#2563eb"
								},
								children: "INDUSTRY-STANDARDIZED CURRICULUM"
							}),
							/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)",
									fontWeight: 800,
									color: "#0f172a",
									marginTop: "6px"
								},
								children: "Three Curated Pathways to Top Engineering Ranks"
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									color: "#64748b",
									fontSize: "0.95rem",
									marginTop: "4px"
								},
								children: "Every track is co-designed with engineering managers from Series-B to Big Tech."
							})
						] }), /* @__PURE__ */ jsxs("button", {
							onClick: () => {
								setActivePage("tracks");
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							},
							className: "btn-secondary",
							style: {
								display: "flex",
								alignItems: "center",
								gap: "6px"
							},
							children: [/* @__PURE__ */ jsx("span", { children: "Compare All Tracks" }), /* @__PURE__ */ jsx(ArrowRight, { style: {
								width: 14,
								height: 14
							} })]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
							gap: "1.75rem"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "karka-card",
								style: {
									padding: "2rem",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between"
								},
								children: [/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("span", {
										className: "badge-pill badge-blue",
										style: { marginBottom: "1rem" },
										children: "16 WEEKS • ADVANCED"
									}),
									/* @__PURE__ */ jsx("h3", {
										style: {
											fontSize: "1.25rem",
											fontWeight: 800,
											color: "#0f172a",
											marginBottom: "8px"
										},
										children: "Generative AI & LLM Systems Architect"
									}),
									/* @__PURE__ */ jsx("p", {
										style: {
											fontSize: "0.86rem",
											color: "#64748b",
											lineHeight: 1.6,
											marginBottom: "1.25rem"
										},
										children: "Deep-dive into autonomous multi-agent swarms, GraphRAG retrieval architectures, fine-tuning open-source models, and production inference."
									}),
									/* @__PURE__ */ jsxs("div", {
										style: { marginBottom: "1.25rem" },
										children: [/* @__PURE__ */ jsx("div", {
											style: {
												fontSize: "0.72rem",
												fontWeight: 700,
												color: "#94a3b8",
												textTransform: "uppercase",
												marginBottom: "6px"
											},
											children: "PRODUCTION TECH STACK"
										}), /* @__PURE__ */ jsx("div", {
											style: {
												display: "flex",
												flexWrap: "wrap",
												gap: "6px"
											},
											children: [
												"LangGraph",
												"vLLM",
												"Qdrant DB",
												"LoRA",
												"Multi-Agent"
											].map((tag, tIdx) => /* @__PURE__ */ jsx("span", {
												style: {
													fontSize: "0.74rem",
													padding: "3px 8px",
													background: "#f1f5f9",
													borderRadius: "6px",
													color: "#334155",
													fontWeight: 600
												},
												children: tag
											}, tIdx))
										})]
									})
								] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									style: {
										padding: "10px 0",
										borderTop: "1px solid #e2e8f0",
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center"
									},
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "0.7rem",
											color: "#64748b"
										},
										children: "Benchmark Salary Target"
									}), /* @__PURE__ */ jsx("div", {
										style: {
											fontSize: "1.1rem",
											fontWeight: 800,
											color: "#2563eb"
										},
										children: "₹16.5 LPA"
									})] }), /* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "0.72rem",
											background: "#ecfdf5",
											color: "#059669",
											padding: "3px 8px",
											borderRadius: "4px",
											fontWeight: 700
										},
										children: "HIGH GROWTH"
									})]
								}), /* @__PURE__ */ jsx("button", {
									onClick: () => onOpenSyllabus("Generative AI & LLM Systems Architect"),
									className: "btn-secondary",
									style: {
										width: "100%",
										marginTop: "10px"
									},
									children: "View Complete Syllabus →"
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "karka-card",
								style: {
									padding: "2rem",
									border: "2px solid #2563eb",
									position: "relative",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									boxShadow: "0 12px 30px -4px rgba(37, 99, 235, 0.18)"
								},
								children: [
									/* @__PURE__ */ jsx("div", {
										style: {
											position: "absolute",
											top: "-12px",
											left: "50%",
											transform: "translateX(-50%)",
											background: "linear-gradient(90deg, #ea580c 0%, #f97316 100%)",
											color: "#ffffff",
											fontSize: "0.7rem",
											fontWeight: 800,
											letterSpacing: "0.05em",
											padding: "3px 12px",
											borderRadius: "9999px"
										},
										children: "🔥 MOST POPULAR • 150+ ENROLLED"
									}),
									/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("span", {
											className: "badge-pill badge-amber",
											style: {
												marginBottom: "1rem",
												marginTop: "6px"
											},
											children: "24 WEEKS • COMPREHENSIVE"
										}),
										/* @__PURE__ */ jsx("h3", {
											style: {
												fontSize: "1.25rem",
												fontWeight: 800,
												color: "#0f172a",
												marginBottom: "8px"
											},
											children: "AI Full-Stack Engineering"
										}),
										/* @__PURE__ */ jsx("p", {
											style: {
												fontSize: "0.86rem",
												color: "#64748b",
												lineHeight: 1.6,
												marginBottom: "1.25rem"
											},
											children: "The complete builder stack. Architect modern Next.js 15 apps, distributed microservices, low-latency queues, and robust enterprise LLM integrations."
										}),
										/* @__PURE__ */ jsxs("div", {
											style: { marginBottom: "1.25rem" },
											children: [/* @__PURE__ */ jsx("div", {
												style: {
													fontSize: "0.72rem",
													fontWeight: 700,
													color: "#94a3b8",
													textTransform: "uppercase",
													marginBottom: "6px"
												},
												children: "PRODUCTION TECH STACK"
											}), /* @__PURE__ */ jsx("div", {
												style: {
													display: "flex",
													flexWrap: "wrap",
													gap: "6px"
												},
												children: [
													"Next.js 15",
													"FastAPI",
													"PostgreSQL",
													"Redis",
													"Docker",
													"WebSockets"
												].map((tag, tIdx) => /* @__PURE__ */ jsx("span", {
													style: {
														fontSize: "0.74rem",
														padding: "3px 8px",
														background: "#f1f5f9",
														borderRadius: "6px",
														color: "#334155",
														fontWeight: 600
													},
													children: tag
												}, tIdx))
											})]
										})
									] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
										style: {
											padding: "10px 0",
											borderTop: "1px solid #e2e8f0",
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center"
										},
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
											style: {
												fontSize: "0.7rem",
												color: "#64748b"
											},
											children: "Benchmark Salary Target"
										}), /* @__PURE__ */ jsx("div", {
											style: {
												fontSize: "1.1rem",
												fontWeight: 800,
												color: "#2563eb"
											},
											children: "₹12.0 LPA"
										})] }), /* @__PURE__ */ jsx("span", {
											style: {
												fontSize: "0.72rem",
												background: "#fff7ed",
												color: "#ea580c",
												padding: "3px 8px",
												borderRadius: "4px",
												fontWeight: 700
											},
											children: "TOP PLACEMENTS"
										})]
									}), /* @__PURE__ */ jsx("button", {
										onClick: () => onOpenAssessment("AI Full-Stack Engineering"),
										className: "btn-primary",
										style: {
											width: "100%",
											marginTop: "10px",
											backgroundColor: "#ea580c"
										},
										children: "Claim Scholarship & Apply →"
									})] })
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "karka-card",
								style: {
									padding: "2rem",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between"
								},
								children: [/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("span", {
										className: "badge-pill badge-green",
										style: { marginBottom: "1rem" },
										children: "20 WEEKS • SCALABILITY"
									}),
									/* @__PURE__ */ jsx("h3", {
										style: {
											fontSize: "1.25rem",
											fontWeight: 800,
											color: "#0f172a",
											marginBottom: "8px"
										},
										children: "Data Engineering & Applied MLOps"
									}),
									/* @__PURE__ */ jsx("p", {
										style: {
											fontSize: "0.86rem",
											color: "#64748b",
											lineHeight: 1.6,
											marginBottom: "1.25rem"
										},
										children: "Produce petabyte-scale event streams, continuous feature stores, data lakes, construct reproducible training workflows, and monitor models in production."
									}),
									/* @__PURE__ */ jsxs("div", {
										style: { marginBottom: "1.25rem" },
										children: [/* @__PURE__ */ jsx("div", {
											style: {
												fontSize: "0.72rem",
												fontWeight: 700,
												color: "#94a3b8",
												textTransform: "uppercase",
												marginBottom: "6px"
											},
											children: "PRODUCTION TECH STACK"
										}), /* @__PURE__ */ jsx("div", {
											style: {
												display: "flex",
												flexWrap: "wrap",
												gap: "6px"
											},
											children: [
												"Apache Kafka",
												"PySpark",
												"Snowflake",
												"Airflow",
												"Delta Lake"
											].map((tag, tIdx) => /* @__PURE__ */ jsx("span", {
												style: {
													fontSize: "0.74rem",
													padding: "3px 8px",
													background: "#f1f5f9",
													borderRadius: "6px",
													color: "#334155",
													fontWeight: 600
												},
												children: tag
											}, tIdx))
										})]
									})
								] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									style: {
										padding: "10px 0",
										borderTop: "1px solid #e2e8f0",
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center"
									},
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "0.7rem",
											color: "#64748b"
										},
										children: "Benchmark Salary Target"
									}), /* @__PURE__ */ jsx("div", {
										style: {
											fontSize: "1.1rem",
											fontWeight: 800,
											color: "#2563eb"
										},
										children: "₹11.5 LPA"
									})] }), /* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "0.72rem",
											background: "#eff6ff",
											color: "#2563eb",
											padding: "3px 8px",
											borderRadius: "4px",
											fontWeight: 700
										},
										children: "HIGH DEMAND"
									})]
								}), /* @__PURE__ */ jsx("button", {
									onClick: () => onOpenSyllabus("Data Engineering & Applied MLOps"),
									className: "btn-secondary",
									style: {
										width: "100%",
										marginTop: "10px"
									},
									children: "View Complete Syllabus →"
								})] })]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				style: {
					padding: "4.5rem 1.5rem",
					maxWidth: "1280px",
					margin: "0 auto"
				},
				children: [/* @__PURE__ */ jsxs("div", {
					style: { marginBottom: "2.5rem" },
					children: [
						/* @__PURE__ */ jsx("span", {
							style: {
								fontSize: "0.74rem",
								fontWeight: 700,
								color: "#059669",
								background: "#ecfdf5",
								padding: "3px 10px",
								borderRadius: "9999px"
							},
							children: "PROOF OF WORK"
						}),
						/* @__PURE__ */ jsx("h2", {
							style: {
								fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)",
								fontWeight: 800,
								color: "#0f172a",
								marginTop: "8px"
							},
							children: "Real Production Systems. Zero Dummy Clones."
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								color: "#64748b",
								fontSize: "0.95rem",
								marginTop: "4px"
							},
							children: "Actual commercial-grade systems engineered, audited, and deployed by Karka students during their final 8-week client agency phase."
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
						gap: "2rem"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						className: "karka-card",
						style: {
							padding: "1.75rem",
							overflow: "hidden"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: "12px"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.74rem",
										fontWeight: 700,
										color: "#2563eb"
									},
									children: "HEALTHCARE TECH"
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.72rem",
										fontWeight: 700,
										color: "#059669",
										background: "#ecfdf5",
										padding: "2px 8px",
										borderRadius: "4px"
									},
									children: "97.4% ACCURACY"
								})]
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: "1.25rem",
									fontWeight: 800,
									color: "#0f172a",
									marginBottom: "8px"
								},
								children: "Automated Med-Scan AI"
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "0.86rem",
									color: "#64748b",
									lineHeight: 1.6,
									marginBottom: "1.25rem"
								},
								children: "Autonomous clinical triage assistant summarizing chest radiographs and doctor notes using quantized Vision Transformers at sub-second inference."
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									background: "#f8fafc",
									border: "1px solid #e2e8f0",
									borderRadius: "8px",
									padding: "12px",
									marginBottom: "1rem",
									fontFamily: "var(--font-mono)",
									fontSize: "0.72rem",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									gap: "6px"
								},
								children: [
									/* @__PURE__ */ jsx("div", {
										style: {
											background: "#eff6ff",
											padding: "4px 6px",
											borderRadius: "4px",
											color: "#2563eb"
										},
										children: "DICOM Ingest"
									}),
									/* @__PURE__ */ jsx("span", {
										style: { color: "#94a3b8" },
										children: "→"
									}),
									/* @__PURE__ */ jsx("div", {
										style: {
											background: "#eff6ff",
											padding: "4px 6px",
											borderRadius: "4px",
											color: "#2563eb"
										},
										children: "PyTorch ViT"
									}),
									/* @__PURE__ */ jsx("span", {
										style: { color: "#94a3b8" },
										children: "→"
									}),
									/* @__PURE__ */ jsx("div", {
										style: {
											background: "#eff6ff",
											padding: "4px 6px",
											borderRadius: "4px",
											color: "#2563eb"
										},
										children: "Doctor Webhook"
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									paddingTop: "10px",
									borderTop: "1px solid #e2e8f0"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.75rem",
										color: "#64748b"
									},
									children: "Stack: PyTorch, FastAPI, Qdrant"
								}), /* @__PURE__ */ jsx("button", {
									onClick: () => {
										setActivePage("production-lab");
										window.scrollTo({
											top: 0,
											behavior: "smooth"
										});
									},
									style: {
										background: "none",
										border: "none",
										color: "#2563eb",
										fontWeight: 700,
										fontSize: "0.82rem",
										cursor: "pointer"
									},
									children: "Read Case Study →"
								})]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "karka-card",
						style: {
							padding: "1.75rem",
							overflow: "hidden"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: "12px"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.74rem",
										fontWeight: 700,
										color: "#ea580c"
									},
									children: "FINTECH & SECURITY"
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.72rem",
										fontWeight: 700,
										color: "#059669",
										background: "#ecfdf5",
										padding: "2px 8px",
										borderRadius: "4px"
									},
									children: "LATENCY < 4.5MS"
								})]
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: "1.25rem",
									fontWeight: 800,
									color: "#0f172a",
									marginBottom: "8px"
								},
								children: "Agentic Fraud Shield"
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "0.86rem",
									color: "#64748b",
									lineHeight: 1.6,
									marginBottom: "1.25rem"
								},
								children: "Distributed transaction anomaly detector deployed for a digital payment aggregator. Flags zero-day credit card laundering using temporal graph networks."
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									background: "#f8fafc",
									border: "1px solid #e2e8f0",
									borderRadius: "8px",
									padding: "12px",
									marginBottom: "1rem",
									fontFamily: "var(--font-mono)",
									fontSize: "0.72rem",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									gap: "6px"
								},
								children: [
									/* @__PURE__ */ jsx("div", {
										style: {
											background: "#fff7ed",
											padding: "4px 6px",
											borderRadius: "4px",
											color: "#c2410c"
										},
										children: "Kafka Stream"
									}),
									/* @__PURE__ */ jsx("span", {
										style: { color: "#94a3b8" },
										children: "→"
									}),
									/* @__PURE__ */ jsx("div", {
										style: {
											background: "#fff7ed",
											padding: "4px 6px",
											borderRadius: "4px",
											color: "#c2410c"
										},
										children: "LangGraph Agent"
									}),
									/* @__PURE__ */ jsx("span", {
										style: { color: "#94a3b8" },
										children: "→"
									}),
									/* @__PURE__ */ jsx("div", {
										style: {
											background: "#fff7ed",
											padding: "4px 6px",
											borderRadius: "4px",
											color: "#c2410c"
										},
										children: "10ms Freeze"
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									paddingTop: "10px",
									borderTop: "1px solid #e2e8f0"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.75rem",
										color: "#64748b"
									},
									children: "Stack: Kafka, Faust, GNN, Docker"
								}), /* @__PURE__ */ jsx("button", {
									onClick: () => {
										setActivePage("production-lab");
										window.scrollTo({
											top: 0,
											behavior: "smooth"
										});
									},
									style: {
										background: "none",
										border: "none",
										color: "#2563eb",
										fontWeight: 700,
										fontSize: "0.82rem",
										cursor: "pointer"
									},
									children: "Read Case Study →"
								})]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				style: {
					padding: "4.5rem 1.5rem",
					backgroundColor: "#f8fafc",
					borderTop: "1px solid #e2e8f0"
				},
				children: /* @__PURE__ */ jsxs("div", {
					style: {
						maxWidth: "1280px",
						margin: "0 auto"
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							style: {
								textAlign: "center",
								marginBottom: "3rem"
							},
							children: [
								/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.74rem",
										fontWeight: 700,
										color: "#2563eb",
										background: "#eff6ff",
										padding: "4px 12px",
										borderRadius: "9999px"
									},
									children: "AUDITED PLACEMENT RECORDS"
								}),
								/* @__PURE__ */ jsx("h2", {
									style: {
										fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)",
										fontWeight: 800,
										color: "#0f172a",
										marginTop: "10px"
									},
									children: "From Non-Tech Degrees to High-Paying AI Engineering"
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										color: "#64748b",
										fontSize: "0.95rem",
										marginTop: "6px"
									},
									children: "Every offer letter is verified by independent third-party auditors."
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
								gap: "1.5rem"
							},
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "karka-card",
									style: { padding: "1.75rem" },
									children: [
										/* @__PURE__ */ jsxs("div", {
											style: {
												display: "flex",
												alignItems: "center",
												gap: "12px",
												marginBottom: "1rem"
											},
											children: [/* @__PURE__ */ jsx("div", {
												style: {
													width: 44,
													height: 44,
													borderRadius: "50%",
													backgroundColor: "#eff6ff",
													color: "#2563eb",
													fontWeight: 700,
													display: "flex",
													alignItems: "center",
													justifyContent: "center"
												},
												children: "PS"
											}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
												style: {
													fontWeight: 800,
													color: "#0f172a"
												},
												children: "Priya S."
											}), /* @__PURE__ */ jsx("p", {
												style: {
													fontSize: "0.75rem",
													color: "#64748b"
												},
												children: "Operations Exec → Zoho Corp"
											})] })]
										}),
										/* @__PURE__ */ jsx("p", {
											style: {
												fontSize: "0.85rem",
												color: "#475569",
												lineHeight: 1.6,
												fontStyle: "italic",
												marginBottom: "1.25rem"
											},
											children: "\"I had no coding background. Karka's daily sprints helped me ship 4 real client apps. Cracked Zoho's technical rounds on day 12 of placements.\""
										}),
										/* @__PURE__ */ jsxs("div", {
											style: {
												display: "flex",
												justifyContent: "space-between",
												alignItems: "center",
												paddingTop: "10px",
												borderTop: "1px solid #e2e8f0"
											},
											children: [/* @__PURE__ */ jsx("span", {
												style: {
													fontSize: "0.74rem",
													color: "#059669",
													fontWeight: 700
												},
												children: "Verified Offer"
											}), /* @__PURE__ */ jsx("span", {
												style: {
													fontSize: "1.1rem",
													fontWeight: 800,
													color: "#2563eb"
												},
												children: "₹9.5 LPA"
											})]
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "karka-card",
									style: { padding: "1.75rem" },
									children: [
										/* @__PURE__ */ jsxs("div", {
											style: {
												display: "flex",
												alignItems: "center",
												gap: "12px",
												marginBottom: "1rem"
											},
											children: [/* @__PURE__ */ jsx("div", {
												style: {
													width: 44,
													height: 44,
													borderRadius: "50%",
													backgroundColor: "#fff7ed",
													color: "#ea580c",
													fontWeight: 700,
													display: "flex",
													alignItems: "center",
													justifyContent: "center"
												},
												children: "AK"
											}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
												style: {
													fontWeight: 800,
													color: "#0f172a"
												},
												children: "Arun Kumar"
											}), /* @__PURE__ */ jsx("p", {
												style: {
													fontSize: "0.75rem",
													color: "#64748b"
												},
												children: "BE Mechanical → Razorpay Corp"
											})] })]
										}),
										/* @__PURE__ */ jsx("p", {
											style: {
												fontSize: "0.85rem",
												color: "#475569",
												lineHeight: 1.6,
												fontStyle: "italic",
												marginBottom: "1.25rem"
											},
											children: "\"The ISA agreement gave me confidence to transition. In 20 weeks I mastered Docker, Qdrant, and microservices. Tripled my salary expectation.\""
										}),
										/* @__PURE__ */ jsxs("div", {
											style: {
												display: "flex",
												justifyContent: "space-between",
												alignItems: "center",
												paddingTop: "10px",
												borderTop: "1px solid #e2e8f0"
											},
											children: [/* @__PURE__ */ jsx("span", {
												style: {
													fontSize: "0.74rem",
													color: "#059669",
													fontWeight: 700
												},
												children: "Verified Offer"
											}), /* @__PURE__ */ jsx("span", {
												style: {
													fontSize: "1.1rem",
													fontWeight: 800,
													color: "#2563eb"
												},
												children: "₹14.2 LPA"
											})]
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "karka-card",
									style: { padding: "1.75rem" },
									children: [
										/* @__PURE__ */ jsxs("div", {
											style: {
												display: "flex",
												alignItems: "center",
												gap: "12px",
												marginBottom: "1rem"
											},
											children: [/* @__PURE__ */ jsx("div", {
												style: {
													width: 44,
													height: 44,
													borderRadius: "50%",
													backgroundColor: "#ecfdf5",
													color: "#059669",
													fontWeight: 700,
													display: "flex",
													alignItems: "center",
													justifyContent: "center"
												},
												children: "DM"
											}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
												style: {
													fontWeight: 800,
													color: "#0f172a"
												},
												children: "Divya M."
											}), /* @__PURE__ */ jsx("p", {
												style: {
													fontSize: "0.75rem",
													color: "#64748b"
												},
												children: "Tier-3 Final Year → Freshworks"
											})] })]
										}),
										/* @__PURE__ */ jsx("p", {
											style: {
												fontSize: "0.85rem",
												color: "#475569",
												lineHeight: 1.6,
												fontStyle: "italic",
												marginBottom: "1.25rem"
											},
											children: "\"College was only teaching legacy Java. Karka taught me enterprise system design, LLM pipelines, and GraphQL before my final semester.\""
										}),
										/* @__PURE__ */ jsxs("div", {
											style: {
												display: "flex",
												justifyContent: "space-between",
												alignItems: "center",
												paddingTop: "10px",
												borderTop: "1px solid #e2e8f0"
											},
											children: [/* @__PURE__ */ jsx("span", {
												style: {
													fontSize: "0.74rem",
													color: "#059669",
													fontWeight: 700
												},
												children: "Verified Offer"
											}), /* @__PURE__ */ jsx("span", {
												style: {
													fontSize: "1.1rem",
													fontWeight: 800,
													color: "#2563eb"
												},
												children: "₹8.8 LPA"
											})]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							style: {
								textAlign: "center",
								marginTop: "2.5rem"
							},
							children: /* @__PURE__ */ jsxs("button", {
								onClick: () => {
									setActivePage("placements");
									window.scrollTo({
										top: 0,
										behavior: "smooth"
									});
								},
								style: {
									background: "none",
									border: "none",
									color: "#2563eb",
									fontWeight: 700,
									fontSize: "0.92rem",
									cursor: "pointer",
									display: "inline-flex",
									alignItems: "center",
									gap: "4px"
								},
								children: [/* @__PURE__ */ jsx("span", { children: "Explore 200+ Video Testimonials & Audited Letters" }), /* @__PURE__ */ jsx(ChevronRight, { style: {
									width: 16,
									height: 16
								} })]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "quick-eligibility",
				style: {
					padding: "4.5rem 1.5rem",
					maxWidth: "860px",
					margin: "0 auto"
				},
				children: /* @__PURE__ */ jsxs("div", {
					style: {
						backgroundColor: "#ffffff",
						borderRadius: "24px",
						border: "1px solid #e2e8f0",
						boxShadow: "0 20px 40px -10px rgba(15, 23, 42, 0.08)",
						padding: "2.5rem"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						style: {
							textAlign: "center",
							marginBottom: "1.75rem"
						},
						children: [
							/* @__PURE__ */ jsx("span", {
								style: {
									fontSize: "0.72rem",
									fontWeight: 700,
									color: "#ea580c",
									background: "#fff7ed",
									padding: "4px 12px",
									borderRadius: "9999px"
								},
								children: "⚡ FAST 60-SEC CHECK"
							}),
							/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "#0f172a",
									marginTop: "8px"
								},
								children: "Check Your PAP Eligibility"
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									color: "#64748b",
									fontSize: "0.88rem",
									marginTop: "4px"
								},
								children: "Find out if you qualify for zero upfront tuition and receive our real 2026 AI master roadmap."
							})
						]
					}), !elgResult ? /* @__PURE__ */ jsxs("form", {
						onSubmit: handleEligibilitySubmit,
						style: {
							display: "flex",
							flexDirection: "column",
							gap: "1.25rem"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "grid",
									gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
									gap: "1.25rem"
								},
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									style: {
										display: "block",
										fontSize: "0.82rem",
										fontWeight: 600,
										color: "#334155",
										marginBottom: "6px"
									},
									children: "HIGHEST QUALIFICATION"
								}), /* @__PURE__ */ jsxs("select", {
									value: elgData.qualification,
									onChange: (e) => setElgData({
										...elgData,
										qualification: e.target.value
									}),
									style: {
										width: "100%",
										padding: "0.65rem 0.85rem",
										borderRadius: "8px",
										border: "1px solid #cbd5e1",
										fontSize: "0.88rem",
										backgroundColor: "#ffffff"
									},
									children: [
										/* @__PURE__ */ jsx("option", {
											value: "B.Tech / BE (Computer Science / IT)",
											children: "B.Tech / BE (Computer Science / IT)"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "Non-CS Engineering (Mech, EEE, Civil)",
											children: "Non-CS Engineering (Mech, EEE, Civil)"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "BCA / MCA / B.Sc Computer Science",
											children: "BCA / MCA / B.Sc Computer Science"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "Non-Tech Degree (B.Com, B.A, B.Sc)",
											children: "Non-Tech Degree (B.Com, B.A, B.Sc)"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "Working Software Professional",
											children: "Working Software Professional"
										})
									]
								})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									style: {
										display: "block",
										fontSize: "0.82rem",
										fontWeight: 600,
										color: "#334155",
										marginBottom: "6px"
									},
									children: "GRADUATION YEAR"
								}), /* @__PURE__ */ jsxs("select", {
									value: elgData.graduationYear,
									onChange: (e) => setElgData({
										...elgData,
										graduationYear: e.target.value
									}),
									style: {
										width: "100%",
										padding: "0.65rem 0.85rem",
										borderRadius: "8px",
										border: "1px solid #cbd5e1",
										fontSize: "0.88rem",
										backgroundColor: "#ffffff"
									},
									children: [
										/* @__PURE__ */ jsx("option", {
											value: "2026 (Final Year)",
											children: "2026 (Final Year)"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "2025 (Graduating This Year)",
											children: "2025 (Graduating This Year)"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "2024",
											children: "2024"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "2023 or Earlier",
											children: "2023 or Earlier"
										})
									]
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "grid",
									gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
									gap: "1.25rem"
								},
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									style: {
										display: "block",
										fontSize: "0.82rem",
										fontWeight: 600,
										color: "#334155",
										marginBottom: "6px"
									},
									children: "TARGET TRACK"
								}), /* @__PURE__ */ jsxs("select", {
									value: elgData.targetTrack,
									onChange: (e) => setElgData({
										...elgData,
										targetTrack: e.target.value
									}),
									style: {
										width: "100%",
										padding: "0.65rem 0.85rem",
										borderRadius: "8px",
										border: "1px solid #cbd5e1",
										fontSize: "0.88rem",
										backgroundColor: "#ffffff"
									},
									children: [
										/* @__PURE__ */ jsx("option", {
											value: "AI Full-Stack Engineering (Backend + LLMs)",
											children: "AI Full-Stack Engineering (Backend + LLMs)"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "Generative AI & LLM Systems Architect",
											children: "Generative AI & LLM Systems Architect"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "Data Engineering & Applied MLOps",
											children: "Data Engineering & Applied MLOps"
										})
									]
								})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									style: {
										display: "block",
										fontSize: "0.82rem",
										fontWeight: 600,
										color: "#334155",
										marginBottom: "6px"
									},
									children: "WHATSAPP NUMBER"
								}), /* @__PURE__ */ jsx("input", {
									type: "tel",
									required: true,
									placeholder: "+91 98765 43210",
									value: elgData.whatsappNumber,
									onChange: (e) => setElgData({
										...elgData,
										whatsappNumber: e.target.value
									}),
									style: {
										width: "100%",
										padding: "0.65rem 0.85rem",
										borderRadius: "8px",
										border: "1px solid #cbd5e1",
										fontSize: "0.88rem",
										outline: "none"
									}
								})] })]
							}),
							/* @__PURE__ */ jsx("button", {
								type: "submit",
								disabled: elgLoading,
								className: "btn-primary",
								style: {
									width: "100%",
									padding: "0.85rem",
									fontSize: "0.96rem",
									marginTop: "6px",
									backgroundColor: "#2563eb"
								},
								children: elgLoading ? "Verifying with Admissions API..." : "CHECK PAP ELIGIBILITY & GET ROADMAP ⚡"
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: "1.25rem",
									flexWrap: "wrap",
									fontSize: "0.74rem",
									color: "#64748b",
									marginTop: "4px"
								},
								children: [
									/* @__PURE__ */ jsx("span", { children: "🔒 100% Privacy Protected" }),
									/* @__PURE__ */ jsx("span", { children: "💳 No Credit Card Required" }),
									/* @__PURE__ */ jsx("span", { children: "👨‍🏫 1-on-1 Selection Counseling" })
								]
							})
						]
					}) : /* @__PURE__ */ jsxs("div", {
						style: { textAlign: "center" },
						className: "animate-fade-in",
						children: [
							/* @__PURE__ */ jsx("div", {
								style: {
									width: 56,
									height: 56,
									borderRadius: "50%",
									backgroundColor: "#ecfdf5",
									color: "#059669",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									margin: "0 auto 12px"
								},
								children: /* @__PURE__ */ jsx(CheckCircle, { style: {
									width: 32,
									height: 32
								} })
							}),
							/* @__PURE__ */ jsxs("span", {
								style: {
									fontSize: "0.74rem",
									fontWeight: 800,
									color: "#059669",
									background: "#ecfdf5",
									padding: "3px 10px",
									borderRadius: "9999px"
								},
								children: [
									"STATUS: ",
									elgResult.status,
									" (SCORE ",
									elgResult.eligibilityScore,
									"/100)"
								]
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: "1.4rem",
									fontWeight: 800,
									color: "#0f172a",
									marginTop: "8px"
								},
								children: "You Are Eligible for Karka Pay After Placement!"
							}),
							/* @__PURE__ */ jsxs("p", {
								style: {
									fontSize: "0.86rem",
									color: "#64748b",
									marginTop: "4px"
								},
								children: ["Candidate ID: ", /* @__PURE__ */ jsx("strong", {
									style: { color: "#2563eb" },
									children: elgResult.candidateId
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									background: "#f8fafc",
									border: "1px solid #e2e8f0",
									borderRadius: "12px",
									padding: "1.25rem",
									margin: "1.5rem 0",
									textAlign: "left",
									display: "grid",
									gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
									gap: "1rem",
									fontSize: "0.84rem"
								},
								children: [
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										style: {
											color: "#64748b",
											fontSize: "0.74rem"
										},
										children: "Tuition Due Today:"
									}), /* @__PURE__ */ jsx("div", {
										style: {
											fontWeight: 800,
											color: "#059669",
											fontSize: "1rem"
										},
										children: "₹0 (Zero Upfront)"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										style: {
											color: "#64748b",
											fontSize: "0.74rem"
										},
										children: "Qualifying Threshold:"
									}), /* @__PURE__ */ jsx("div", {
										style: {
											fontWeight: 800,
											color: "#0f172a",
											fontSize: "1rem"
										},
										children: "≥ ₹5.0 LPA CTC"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										style: {
											color: "#64748b",
											fontSize: "0.74rem"
										},
										children: "Recommended Track:"
									}), /* @__PURE__ */ jsx("div", {
										style: {
											fontWeight: 800,
											color: "#2563eb",
											fontSize: "0.95rem"
										},
										children: elgResult.recommendedTrack
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										style: {
											color: "#64748b",
											fontSize: "0.74rem"
										},
										children: "Remaining Cohort Seats:"
									}), /* @__PURE__ */ jsxs("div", {
										style: {
											fontWeight: 800,
											color: "#ea580c",
											fontSize: "1rem"
										},
										children: [elgResult.remainingCohortSeats, " Seats"]
									})] })
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									gap: "0.75rem",
									justifyContent: "center"
								},
								children: [/* @__PURE__ */ jsx("button", {
									onClick: () => setElgResult(null),
									className: "btn-secondary",
									children: "Check Another Profile"
								}), /* @__PURE__ */ jsxs("button", {
									onClick: onOpenAssessment,
									className: "btn-primary",
									children: [/* @__PURE__ */ jsx("span", { children: "Take 90-Min Assessment Now" }), /* @__PURE__ */ jsx(ArrowRight, { style: {
										width: 14,
										height: 14
									} })]
								})]
							})
						]
					})]
				})
			})
		]
	});
}
// src/data/tracksData.js
const tracksData = [
	{
		id: "gen-ai-llm",
		category: "genai",
		badge: "16 Weeks • Advanced",
		benchmarkCtc: "Benchmark CTC: ₹16.5 LPA",
		title: "Generative AI & LLM Systems Architect",
		description: "Architect production multi-agent swarms, implement GraphRAG pipelines, and deploy quantized open-source models on distributed GPU clusters.",
		duration: "16 Weeks",
		level: "Advanced",
		capstonesCount: "4 Capstone Systems",
		tags: [
			"LangGraph",
			"vLLM",
			"Vector DBs",
			"Multi-Agent Swarms",
			"LoRA Fine-Tuning"
		],
		mentor: "Lead: Ex-Microsoft AI Lead (1:1 Architecture and Code Reviews)",
		prerequisites: "Python, Data Structures, ML Foundations",
		capstones: "4 Production Systems + 1 Real Live Client",
		mentoring: "1:1 Bi-Weekly Staff AI Architect",
		syllabus: [
			{
				week: "Weeks 1-4",
				title: "Deep Transformer Architectures & Custom Tokenizers",
				topics: [
					"Attention mechanisms from scratch in PyTorch",
					"FlashAttention-2 and RoPE rotary positional embeddings",
					"Tokenization optimizations & BPE vocab synthesis",
					"Low-level GPU profiling with torch.cuda.amp"
				]
			},
			{
				week: "Weeks 5-8",
				title: "Advanced RAG & Knowledge Graphs",
				topics: [
					"GraphRAG and hybrid lexical-dense vector indexing (Qdrant & BM25)",
					"ColBERT multi-vector token-level rerankers",
					"Context window compression & parent document retrieval",
					"Anti-hallucination guardrails and G-Eval automated metrics"
				]
			},
			{
				week: "Weeks 9-12",
				title: "Multi-Agent Swarm Orchestration",
				topics: [
					"LangGraph cyclic state machines & human-in-the-loop triggers",
					"Tool-calling autonomous workers with CrewAI & LangChain",
					"Hierarchical supervisor architecture for self-healing code generators",
					"Event-driven WebSockets streaming with async generators"
				]
			},
			{
				week: "Weeks 13-16",
				title: "Fine-Tuning & High-Throughput Serving (vLLM)",
				topics: [
					"LoRA / QLoRA parameter efficient fine-tuning using Unsloth & PEFT",
					"vLLM PagedAttention deployment on multi-GPU A100/H100 clusters",
					"Model quantization (AWQ, GPTQ, GGUF) and TensorRT-LLM",
					"Live Client Deployment & Production Audit review"
				]
			}
		]
	},
	{
		id: "ai-fullstack",
		category: "fullstack",
		isPopular: true,
		badge: "24 Weeks • Beginner to Pro",
		benchmarkCtc: "Benchmark CTC: ₹12.0 LPA",
		title: "AI Full-Stack Engineering",
		description: "Build modern scalable microservices, interactive web applications, real-time streaming interfaces, and high-performance event-driven architectures.",
		duration: "24 Weeks",
		level: "Beginner to Pro",
		capstonesCount: "All-in-One Curriculum",
		tags: [
			"Next.js 15",
			"FastAPI",
			"PostgreSQL",
			"Redis",
			"Docker",
			"Real-Time WebSockets"
		],
		mentor: "Lead: Ex-Swiggy Staff Architect (200k+ RPS Systems Scaled)",
		prerequisites: "Basic Programming logic (Any language)",
		capstones: "5 Complete SaaS Prototypes with LLMs",
		mentoring: "Daily live coding pods + weekly PR reviews",
		syllabus: [
			{
				week: "Weeks 1-6",
				title: "Modern TypeScript, React 19 & Next.js App Router",
				topics: [
					"React Server Components & Server Actions with deep caching strategies",
					"Modern Tailwind CSS responsive layouts and micro-interactions",
					"Client-side state management (Zustand & TanStack Query)",
					"High-performance streaming UI & AI conversational chat widgets"
				]
			},
			{
				week: "Weeks 7-12",
				title: "High-Concurrency Backend Architecture with FastAPI & Python",
				topics: [
					"Async Python internals (asyncio, uvloop, event loops)",
					"Relational database modeling with PostgreSQL & SQLAlchemy ORM",
					"Redis Pub/Sub caching layers and token-bucket rate limiting",
					"OAuth2, JWT authentication, and RBAC authorization architectures"
				]
			},
			{
				week: "Weeks 13-18",
				title: "AI System Integration & Vector Embeddings",
				topics: [
					"Streaming response endpoints with Server-Sent Events (SSE)",
					"Vector database integration (pgvector & Pinecone) inside relational DBs",
					"LangChain & OpenAI SDK custom tool interfaces",
					"Microservice communication with gRPC and RabbitMQ message queues"
				]
			},
			{
				week: "Weeks 19-24",
				title: "Production Docker, Kubernetes & CI/CD Pipelines",
				topics: [
					"Multi-stage Docker builds & container security hardening",
					"Automated GitHub Actions CI/CD workflows with automated linting & tests",
					"Kubernetes Helm charts, horizontal pod autoscalers (HPA)",
					"Observability with OpenTelemetry, Prometheus & Grafana dashboards"
				]
			}
		]
	},
	{
		id: "data-mlops",
		category: "mlops",
		badge: "20 Weeks • Scalability",
		benchmarkCtc: "Benchmark CTC: ₹11.5 LPA",
		title: "Data Engineering & Applied MLOps",
		description: "Design high-throughput Kafka streaming, lakehouse medallion architectures, automated continuous model retraining, and live telemetry observability.",
		duration: "20 Weeks",
		level: "Intermediate",
		capstonesCount: "5 Streaming Pipelines",
		tags: [
			"Apache Kafka",
			"Spark",
			"Snowflake",
			"Airflow",
			"CI/CD for ML"
		],
		mentor: "Lead: Ex-Razorpay Principal ML Engineer (Petabyte Scale Ingestion)",
		prerequisites: "SQL & Core Python basics",
		capstones: "3 End-to-End Lakehouse Pipelines",
		mentoring: "Weekly Architecture Tear-downs",
		syllabus: [
			{
				week: "Weeks 1-5",
				title: "Distributed Stream Processing with Apache Kafka",
				topics: [
					"Kafka broker internals, consumer groups, and partition balancing",
					"Schema Registry & Avro serialization for strictly typed events",
					"Kafka Streams & Faust stream processing in real time",
					"Dead-letter queues and idempotency patterns"
				]
			},
			{
				week: "Weeks 6-10",
				title: "Big Data Processing with PySpark & Delta Lake",
				topics: [
					"Spark Catalyst optimizer & distributed DAG execution",
					"Medallion architecture (Bronze, Silver, Gold) on Delta Lake",
					"Cloud data warehousing with Snowflake & dbt transformation workflows",
					"Data validation with Great Expectations and schema drift alerts"
				]
			},
			{
				week: "Weeks 11-15",
				title: "Workflow Orchestration & Airflow DAGs",
				topics: [
					"Production Apache Airflow / Astronomer DAG design principles",
					"Dynamic task generation and backfilling distributed pipelines",
					"CI/CD deployment of ML models using MLflow model registry",
					"Feature Stores with Feast for low-latency inference lookups"
				]
			},
			{
				week: "Weeks 16-20",
				title: "Continuous Retraining, Drift Detection & Production Ops",
				topics: [
					"Evidently AI model quality & data concept drift monitoring",
					"Kubeflow pipelines for automated training re-triggers",
					"Canary model rollouts with Seldon Core & Triton Inference Server",
					"Final Enterprise Capstone Defense before Tech Hiring Committee"
				]
			}
		]
	}
];
const trackComparisonRows = [
	{
		criterion: "DURATION",
		genai: "16 WEEKS",
		fullstack: "24 WEEKS",
		mlops: "20 WEEKS",
		highlight: "fullstack"
	},
	{
		criterion: "PREREQUISITES",
		genai: "Python, Data Structures, ML foundations",
		fullstack: "Basic Programming logic (Any language)",
		mlops: "SQL & Core Python basics",
		highlight: "fullstack"
	},
	{
		criterion: "CAPSTONES",
		genai: "4 Production Systems + 1 Real Live Client",
		fullstack: "5 Complete SaaS Prototypes with LLMs",
		mlops: "3 End-to-End Lakehouse Pipelines",
		highlight: "fullstack"
	},
	{
		criterion: "BENCHMARK CTC",
		genai: "₹14.5 - ₹24 LPA",
		fullstack: "₹10.0 - ₹20 LPA",
		mlops: "₹9.5 - ₹18 LPA",
		highlight: "fullstack"
	},
	{
		criterion: "MENTORING",
		genai: "1:1 Bi-Weekly Staff AI Architect",
		fullstack: "Daily live coding pods + weekly PR reviews",
		mlops: "Weekly Architecture Tear-downs",
		highlight: "fullstack"
	},
	{
		criterion: "PAY AFTER PLACEMENT",
		genai: "₹0 Upfront (ISA)",
		fullstack: "₹0 Upfront (ISA)",
		mlops: "₹0 Upfront (ISA)",
		highlight: "all"
	}
];
const weeklyRhythmPhases = [
	{
		phase: "PHASE 01",
		day: "Mon-Wed (PR Tracking)",
		title: "Deep Architecture & Live Coding",
		description: "Live breakdowns of engineering trade-offs, foundational system design, and production microservices.",
		badgeColor: "border-blue-200 bg-blue-50 text-blue-700",
		icon: "code"
	},
	{
		phase: "PHASE 02",
		day: "Thursday (Performance)",
		title: "1-on-1 PR Reviews",
		description: "Line-by-line code review by staff mentors targeting latency memory optimizations and clean syntax.",
		badgeColor: "border-emerald-200 bg-emerald-50 text-emerald-700",
		icon: "git"
	},
	{
		phase: "PHASE 03",
		day: "Friday — Saturday",
		title: "48-Hr Hackathons",
		description: "Intensive project sprints building complete microservices and shipping real-world production code.",
		badgeColor: "border-amber-200 bg-amber-50 text-amber-700",
		icon: "flame"
	},
	{
		phase: "PHASE 04",
		day: "Sunday",
		title: "Mock Whiteboard Interviews",
		description: "Technical whiteboard coding, algorithmic deep-dives, and systems critique conducted by hiring engineers.",
		badgeColor: "border-purple-200 bg-purple-50 text-purple-700",
		icon: "users"
	}
];
// src/data/faqsData.js
const trackFaqs = [
	{
		question: "How does the admissions technical assessment work?",
		answer: "The assessment is a 90-minute timed diagnostic evaluation covering baseline algorithmic problem solving, core computer science logic, and architectural reasoning. You do not need prior AI experience; we test your learning velocity and fundamental tenacity. Candidates who score >= 65% receive an invitation to the 7-day trial cohort with zero upfront payment."
	},
	{
		question: "What are the exact terms of the Pay After Placement (ISA)?",
		answer: "Under the Karka Income Share Agreement (ISA), you pay ₹0 until you secure an engineering role paying at least ₹5,00,000 per annum (₹5.0 LPA). Once employed at or above this threshold, you contribute 15% of your gross monthly salary for 16 months, strictly capped at a maximum of ₹2,40,000. If your salary falls below ₹5.0 LPA or you face a layoff, payments automatically pause."
	},
	{
		question: "Can I switch tracks midway?",
		answer: "Yes. During Weeks 1-4 (Foundational Systems Phase), your assigned staff mentor conducts weekly 1-on-1 performance reviews. If your strengths align better with Agentic LLM Architectures or Data MLOps pipelines rather than AI Full-Stack, you can transition seamlessly with mentor approval without losing cohort standing."
	},
	{
		question: "Are these tracks suitable for working professionals?",
		answer: "Yes! We operate on an intensive 25-30 hours per week schedule designed for modern tech teams. Live interactive coding pods and architecture breakdowns are conducted on weekday evenings (8:00 PM – 10:30 PM IST), and 48-hour hackathons and whiteboard interview simulations take place over weekends."
	},
	{
		question: "What cloud computation resources do students receive?",
		answer: "Every accepted apprentice receives dedicated cloud computing allocations, including managed AWS EC2 instances with NVIDIA A10G/T4 GPUs, Qdrant Cloud vector database clusters, private GitHub Enterprise repositories, and direct API token credits for OpenAI, Anthropic, and open-source vLLM clusters."
	}
];
const papFaqs = [
	{
		question: "Who is eligible for the Pay After Placement program?",
		answer: "Final year students, fresh engineering graduates, and working professionals from any degree background (B.Tech, BE, BCA, MCA, B.Sc, or Non-CS degrees) with strong problem-solving aptitude who pass our 90-minute technical evaluation and commit to 25-30 hours weekly."
	},
	{
		question: "What counts towards the ₹5.0 LPA threshold?",
		answer: "Only your fixed and guaranteed Cost-to-Company (CTC) components in a technical engineering role (e.g. AI Engineer, Software Development Engineer, Full-Stack Developer, Data Engineer). Variable bonuses, paper stock options, or non-cash perks are excluded from the qualifying threshold calculation."
	},
	{
		question: "What if I land a job on my own without Karka's referral?",
		answer: "Our agreement is linked to your skill empowerment. If you land a qualifying engineering position of ₹5.0 LPA or above—whether through Karka hiring partner referrals, direct off-campus applications, or LinkedIn outreach—the standard 15% monthly ISA terms apply up to the fixed cap."
	},
	{
		question: "Can non-Computer Science graduates crack top developer packages?",
		answer: "Over 42% of our successful alumni hold non-CS degrees (Mechanical, Civil, Physics, Commerce). Modern engineering teams prioritize verifiable production Git commits, distributed architecture comprehension, and live system deployments over traditional university degree names."
	},
	{
		question: "What happens if I receive multiple job offers?",
		answer: "You have complete autonomy to choose which company offer to accept. Our dedicated in-house salary negotiation counsel will review every offer letter, analyze compensation breakdowns, and script counter-negotiations to help you secure the highest package."
	}
];
// src/pages/TracksPage.jsx
function TracksPage({ onOpenAssessment, onOpenSyllabus, onOpenCounselor }) {
	const [selectedFilter, setSelectedFilter] = useState("all");
	const [openFaqIndex, setOpenFaqIndex] = useState(0);
	const filterMap = {
		all: "All Tracks",
		genai: "Generative AI & LLMs",
		fullstack: "AI Full-Stack",
		mlops: "Data & MLOps"
	};
	const filteredTracks = selectedFilter === "all" ? tracksData : tracksData.filter((t) => t.category === selectedFilter);
	return /* @__PURE__ */ jsxs("div", {
		style: {
			maxWidth: "1280px",
			margin: "0 auto",
			padding: "3.5rem 1.5rem"
		},
		children: [
			/* @__PURE__ */ jsxs("div", {
				style: {
					textAlign: "center",
					marginBottom: "3rem"
				},
				children: [
					/* @__PURE__ */ jsx("span", {
						style: {
							fontSize: "0.74rem",
							fontWeight: 800,
							textTransform: "uppercase",
							letterSpacing: "0.06em",
							color: "#2563eb",
							background: "#eff6ff",
							border: "1px solid #bfdbfe",
							padding: "5px 14px",
							borderRadius: "9999px",
							display: "inline-block",
							marginBottom: "1rem"
						},
						children: "CURRICULUM 2026 • ZERO UPFRONT TUITION"
					}),
					/* @__PURE__ */ jsx("h1", {
						style: {
							fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
							fontWeight: 800,
							color: "#0f172a",
							letterSpacing: "-0.02em"
						},
						children: "Career Tracks"
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: "#64748b",
							fontSize: "1.05rem",
							maxWidth: "680px",
							margin: "10px auto 2rem",
							lineHeight: 1.6
						},
						children: "Industry-engineered curriculum designed to take you from fundamentals to production AI engineering with zero upfront fees."
					}),
					/* @__PURE__ */ jsx("div", {
						style: {
							display: "inline-flex",
							alignItems: "center",
							gap: "6px",
							background: "#f1f5f9",
							padding: "5px",
							borderRadius: "9999px",
							border: "1px solid #e2e8f0",
							flexWrap: "wrap",
							justifyContent: "center"
						},
						children: Object.entries(filterMap).map(([key, label]) => {
							const isActive = selectedFilter === key;
							return /* @__PURE__ */ jsx("button", {
								onClick: () => setSelectedFilter(key),
								style: {
									background: isActive ? "#2563eb" : "transparent",
									color: isActive ? "#ffffff" : "#475569",
									border: "none",
									padding: "6px 16px",
									borderRadius: "9999px",
									fontSize: "0.82rem",
									fontWeight: isActive ? 700 : 500,
									cursor: "pointer",
									transition: "all 0.14s ease",
									boxShadow: isActive ? "0 2px 8px rgba(37, 99, 235, 0.35)" : "none"
								},
								children: label
							}, key);
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					gap: "2rem",
					marginBottom: "5rem"
				},
				children: filteredTracks.map((track) => /* @__PURE__ */ jsxs("div", {
					className: "karka-card",
					style: {
						padding: "2.5rem",
						border: track.isPopular ? "2px solid #2563eb" : "1px solid #e2e8f0",
						position: "relative",
						borderRadius: "20px"
					},
					children: [
						track.isPopular && /* @__PURE__ */ jsx("div", {
							style: {
								position: "absolute",
								top: "-13px",
								left: "2rem",
								background: "linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)",
								color: "#ffffff",
								fontSize: "0.7rem",
								fontWeight: 800,
								letterSpacing: "0.06em",
								padding: "3px 14px",
								borderRadius: "9999px",
								boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)"
							},
							children: "⭐ FEATURED & MOST POPULAR"
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								justifyContent: "space-between",
								alignItems: "flex-start",
								flexWrap: "wrap",
								gap: "1.5rem",
								marginBottom: "1.5rem"
							},
							children: [/* @__PURE__ */ jsxs("div", {
								style: { flex: "1 1 500px" },
								children: [
									/* @__PURE__ */ jsxs("div", {
										style: {
											display: "flex",
											flexWrap: "wrap",
											gap: "8px",
											marginBottom: "10px"
										},
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "badge-pill badge-blue",
												children: track.duration
											}),
											/* @__PURE__ */ jsx("span", {
												className: "badge-pill",
												style: {
													background: "#f8fafc",
													color: "#475569",
													border: "1px solid #cbd5e1"
												},
												children: track.level
											}),
											/* @__PURE__ */ jsx("span", {
												className: "badge-pill badge-green",
												children: track.benchmarkCtc
											}),
											/* @__PURE__ */ jsx("span", {
												className: "badge-pill",
												style: {
													background: "#fef3c7",
													color: "#b45309",
													border: "1px solid #fde68a"
												},
												children: track.capstonesCount
											})
										]
									}),
									/* @__PURE__ */ jsx("h2", {
										style: {
											fontSize: "1.65rem",
											fontWeight: 800,
											color: "#0f172a",
											marginBottom: "8px"
										},
										children: track.title
									}),
									/* @__PURE__ */ jsx("p", {
										style: {
											color: "#475569",
											fontSize: "0.94rem",
											lineHeight: 1.6,
											maxWidth: "780px"
										},
										children: track.description
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									flexDirection: "column",
									gap: "0.75rem",
									minWidth: "220px"
								},
								children: [/* @__PURE__ */ jsxs("button", {
									onClick: () => onOpenAssessment(track.title),
									className: "btn-primary",
									style: {
										width: "100%",
										padding: "0.75rem 1.25rem",
										fontSize: "0.92rem"
									},
									children: [/* @__PURE__ */ jsx("span", { children: "Apply for Assessment" }), /* @__PURE__ */ jsx(ArrowRight, { style: {
										width: 14,
										height: 14
									} })]
								}), /* @__PURE__ */ jsxs("button", {
									onClick: () => onOpenSyllabus(track.title),
									className: "btn-secondary",
									style: {
										width: "100%",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										gap: "6px"
									},
									children: [/* @__PURE__ */ jsx(Eye, { style: {
										width: 14,
										height: 14
									} }), /* @__PURE__ */ jsx("span", { children: "View Syllabus" })]
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							style: { marginBottom: "1.5rem" },
							children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "0.72rem",
									fontWeight: 700,
									color: "#94a3b8",
									textTransform: "uppercase",
									marginBottom: "8px"
								},
								children: "KEY COMPETENCIES"
							}), /* @__PURE__ */ jsx("div", {
								style: {
									display: "flex",
									flexWrap: "wrap",
									gap: "8px"
								},
								children: track.tags.map((tag, tIdx) => /* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.78rem",
										padding: "4px 10px",
										background: "#f8fafc",
										border: "1px solid #e2e8f0",
										borderRadius: "6px",
										color: "#1e293b",
										fontWeight: 600
									},
									children: tag
								}, tIdx))
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								paddingTop: "1rem",
								borderTop: "1px solid #f1f5f9",
								display: "flex",
								alignItems: "center",
								gap: "8px",
								fontSize: "0.84rem",
								color: "#2563eb",
								fontWeight: 600
							},
							children: [/* @__PURE__ */ jsx(Users, { style: {
								width: 16,
								height: 16
							} }), /* @__PURE__ */ jsx("span", { children: track.mentor })]
						})
					]
				}, track.id))
			}),
			/* @__PURE__ */ jsxs("section", {
				style: { marginBottom: "5.5rem" },
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						textAlign: "center",
						marginBottom: "2.5rem"
					},
					children: [/* @__PURE__ */ jsx("h2", {
						style: {
							fontSize: "1.85rem",
							fontWeight: 800,
							color: "#0f172a"
						},
						children: "Track Comparison"
					}), /* @__PURE__ */ jsx("p", {
						style: {
							color: "#64748b",
							fontSize: "0.92rem",
							marginTop: "4px"
						},
						children: "Side-by-side breakdown to help guide your admissions specialization."
					})]
				}), /* @__PURE__ */ jsx("div", {
					style: {
						overflowX: "auto",
						background: "#ffffff",
						borderRadius: "16px",
						border: "1px solid #e2e8f0",
						boxShadow: "0 4px 20px -2px rgba(15, 23, 42, 0.05)"
					},
					children: /* @__PURE__ */ jsxs("table", {
						style: {
							width: "100%",
							borderCollapse: "collapse",
							textAlign: "left",
							minWidth: "700px"
						},
						children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
							style: {
								background: "#f8fafc",
								borderBottom: "1px solid #e2e8f0"
							},
							children: [
								/* @__PURE__ */ jsx("th", {
									style: {
										padding: "16px 20px",
										fontSize: "0.78rem",
										fontWeight: 700,
										color: "#64748b"
									},
									children: "CRITERIA"
								}),
								/* @__PURE__ */ jsx("th", {
									style: {
										padding: "16px 20px",
										fontSize: "0.85rem",
										fontWeight: 800,
										color: "#0f172a"
									},
									children: "Generative AI & LLMs"
								}),
								/* @__PURE__ */ jsx("th", {
									style: {
										padding: "16px 20px",
										fontSize: "0.85rem",
										fontWeight: 800,
										color: "#2563eb",
										background: "#eff6ff"
									},
									children: "AI Full-Stack"
								}),
								/* @__PURE__ */ jsx("th", {
									style: {
										padding: "16px 20px",
										fontSize: "0.85rem",
										fontWeight: 800,
										color: "#0f172a"
									},
									children: "Data & MLOps"
								})
							]
						}) }), /* @__PURE__ */ jsx("tbody", { children: trackComparisonRows.map((row, idx) => /* @__PURE__ */ jsxs("tr", {
							style: { borderBottom: "1px solid #f1f5f9" },
							children: [
								/* @__PURE__ */ jsx("td", {
									style: {
										padding: "16px 20px",
										fontSize: "0.76rem",
										fontWeight: 700,
										color: "#64748b",
										textTransform: "uppercase"
									},
									children: row.criterion
								}),
								/* @__PURE__ */ jsx("td", {
									style: {
										padding: "16px 20px",
										fontSize: "0.86rem",
										color: "#334155"
									},
									children: row.genai
								}),
								/* @__PURE__ */ jsx("td", {
									style: {
										padding: "16px 20px",
										fontSize: "0.86rem",
										color: "#1e40af",
										fontWeight: 700,
										background: "#eff6ff"
									},
									children: row.fullstack
								}),
								/* @__PURE__ */ jsx("td", {
									style: {
										padding: "16px 20px",
										fontSize: "0.86rem",
										color: "#334155"
									},
									children: row.mlops
								})
							]
						}, idx)) })]
					})
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				style: { marginBottom: "5.5rem" },
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						textAlign: "center",
						marginBottom: "2.5rem"
					},
					children: [/* @__PURE__ */ jsx("h2", {
						style: {
							fontSize: "1.85rem",
							fontWeight: 800,
							color: "#0f172a"
						},
						children: "Weekly Learning Rhythm"
					}), /* @__PURE__ */ jsx("p", {
						style: {
							color: "#64748b",
							fontSize: "0.92rem",
							marginTop: "4px"
						},
						children: "A disciplined 25-30 hours per week designed to mirror modern tech teams."
					})]
				}), /* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
						gap: "1.5rem"
					},
					children: weeklyRhythmPhases.map((phase, idx) => /* @__PURE__ */ jsxs("div", {
						className: "karka-card",
						style: {
							padding: "1.75rem",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between"
						},
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: "12px"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.7rem",
										fontWeight: 800,
										color: "#2563eb",
										background: "#eff6ff",
										padding: "2px 8px",
										borderRadius: "4px"
									},
									children: phase.phase
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.72rem",
										color: "#64748b"
									},
									children: phase.day
								})]
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: "1.1rem",
									fontWeight: 800,
									color: "#0f172a",
									marginBottom: "8px"
								},
								children: phase.title
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "0.84rem",
									color: "#64748b",
									lineHeight: 1.6
								},
								children: phase.description
							})
						] }), /* @__PURE__ */ jsx("div", {
							style: {
								paddingTop: "1rem",
								marginTop: "1rem",
								borderTop: "1px solid #f1f5f9",
								fontSize: "0.75rem",
								color: "#2563eb",
								fontWeight: 700
							},
							children: phase.day.includes("Mon") ? "Mon-Wed (PR Tracking)" : phase.day
						})]
					}, idx))
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				style: {
					maxWidth: "840px",
					margin: "0 auto 5.5rem"
				},
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						textAlign: "center",
						marginBottom: "2.5rem"
					},
					children: [/* @__PURE__ */ jsx("h2", {
						style: {
							fontSize: "1.85rem",
							fontWeight: 800,
							color: "#0f172a"
						},
						children: "Frequently Asked Questions"
					}), /* @__PURE__ */ jsx("p", {
						style: {
							color: "#64748b",
							fontSize: "0.92rem",
							marginTop: "4px"
						},
						children: "Everything you need to know about our tracks, workload, and placement model."
					})]
				}), /* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						flexDirection: "column",
						gap: "0.75rem"
					},
					children: trackFaqs.map((faq, idx) => {
						const isOpen = openFaqIndex === idx;
						return /* @__PURE__ */ jsxs("div", {
							style: {
								background: "#ffffff",
								border: "1px solid #e2e8f0",
								borderRadius: "12px",
								overflow: "hidden",
								transition: "all 0.16s ease"
							},
							children: [/* @__PURE__ */ jsxs("button", {
								onClick: () => setOpenFaqIndex(isOpen ? -1 : idx),
								style: {
									width: "100%",
									padding: "1.25rem 1.5rem",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									gap: "1rem",
									background: "transparent",
									border: "none",
									textAlign: "left",
									cursor: "pointer",
									fontSize: "0.96rem",
									fontWeight: 700,
									color: isOpen ? "#2563eb" : "#0f172a"
								},
								children: [/* @__PURE__ */ jsx("span", { children: faq.question }), /* @__PURE__ */ jsx(ChevronDown, { style: {
									width: 18,
									height: 18,
									transform: isOpen ? "rotate(180deg)" : "none",
									transition: "transform 0.16s ease",
									flexShrink: 0,
									color: isOpen ? "#2563eb" : "#94a3b8"
								} })]
							}), isOpen && /* @__PURE__ */ jsx("div", {
								style: {
									padding: "0 1.5rem 1.25rem",
									color: "#475569",
									fontSize: "0.88rem",
									lineHeight: 1.65,
									borderTop: "1px solid #f8fafc"
								},
								className: "animate-fade-in",
								children: faq.answer
							})]
						}, idx);
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				style: {
					background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #1e40af 100%)",
					borderRadius: "24px",
					padding: "3.5rem 2rem",
					textAlign: "center",
					color: "#ffffff",
					boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.4)"
				},
				children: [
					/* @__PURE__ */ jsx("h2", {
						style: {
							fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)",
							fontWeight: 800,
							marginBottom: "10px"
						},
						children: "Ready to launch your AI engineering career?"
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: "#bfdbfe",
							fontSize: "1rem",
							maxWidth: "600px",
							margin: "0 auto 2rem",
							lineHeight: 1.6
						},
						children: "Take the 90-minute technical assessment or talk to an admissions advisor today. Pay nothing until you get placed."
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							justifyContent: "center",
							gap: "1rem",
							flexWrap: "wrap"
						},
						children: [/* @__PURE__ */ jsxs("button", {
							onClick: () => onOpenAssessment(),
							style: {
								backgroundColor: "#ffffff",
								color: "#1d4ed8",
								fontWeight: 700,
								fontSize: "0.94rem",
								padding: "0.75rem 1.6rem",
								borderRadius: "10px",
								border: "none",
								cursor: "pointer",
								display: "inline-flex",
								alignItems: "center",
								gap: "6px"
							},
							children: [/* @__PURE__ */ jsx("span", { children: "Apply for Assessment" }), /* @__PURE__ */ jsx(ArrowRight, { style: {
								width: 14,
								height: 14
							} })]
						}), /* @__PURE__ */ jsxs("button", {
							onClick: onOpenCounselor,
							style: {
								backgroundColor: "rgba(255, 255, 255, 0.15)",
								color: "#ffffff",
								fontWeight: 600,
								fontSize: "0.94rem",
								padding: "0.75rem 1.6rem",
								borderRadius: "10px",
								border: "1px solid rgba(255, 255, 255, 0.3)",
								cursor: "pointer",
								display: "inline-flex",
								alignItems: "center",
								gap: "6px"
							},
							children: [/* @__PURE__ */ jsx(MessageSquare, { style: {
								width: 16,
								height: 16
							} }), /* @__PURE__ */ jsx("span", { children: "Speak with an Advisor" })]
						})]
					})
				]
			})
		]
	});
}
// src/pages/PayAfterPlacementPage.jsx
function PayAfterPlacementPage({ onOpenEligibility, onOpenCounselor, onOpenISA }) {
	const [ctcLpa, setCtcLpa] = useState(12);
	const [openFaqIndex, setOpenFaqIndex] = useState(0);
	const isQualifying = ctcLpa >= 5;
	const monthlyGross = Math.round(ctcLpa * 1e5 / 12);
	const karkaShare = isQualifying ? Math.round(monthlyGross * .15) : 0;
	const inPocket = monthlyGross - karkaShare;
	const theoreticalTotal = karkaShare * 16;
	const cappedTotal = Math.min(theoreticalTotal, 24e4);
	const formatINR = (val) => new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 0
	}).format(val);
	return /* @__PURE__ */ jsxs("div", {
		style: {
			maxWidth: "1280px",
			margin: "0 auto",
			padding: "3.5rem 1.5rem"
		},
		children: [
			/* @__PURE__ */ jsxs("div", {
				style: {
					textAlign: "center",
					marginBottom: "3.5rem"
				},
				children: [
					/* @__PURE__ */ jsx("span", {
						style: {
							fontSize: "0.74rem",
							fontWeight: 800,
							textTransform: "uppercase",
							letterSpacing: "0.06em",
							color: "#2563eb",
							background: "#eff6ff",
							border: "1px solid #bfdbfe",
							padding: "5px 14px",
							borderRadius: "9999px",
							display: "inline-block",
							marginBottom: "1rem"
						},
						children: "100% SKIN IN THE GAME • 100% RISK-FREE"
					}),
					/* @__PURE__ */ jsxs("h1", {
						style: {
							fontSize: "clamp(2.1rem, 4.2vw, 3.2rem)",
							fontWeight: 800,
							color: "#0f172a",
							letterSpacing: "-0.02em",
							lineHeight: 1.2
						},
						children: [
							"Pay Only When You Land a Job ≥",
							" ",
							/* @__PURE__ */ jsx("span", {
								style: { color: "#2563eb" },
								children: "₹5.0 LPA."
							}),
							" ",
							/* @__PURE__ */ jsx("br", {}),
							"Zero Upfront Tuition."
						]
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: "#64748b",
							fontSize: "1.05rem",
							maxWidth: "680px",
							margin: "12px auto 1.75rem",
							lineHeight: 1.6
						},
						children: "We invest in your engineering growth first. If you don't land a qualifying high-paying job, you pay ₹0. No hidden debt, no collateral, zero interest traps."
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "1rem",
							flexWrap: "wrap",
							fontSize: "0.8rem",
							fontWeight: 600,
							color: "#334155"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: "6px",
									background: "#ffffff",
									padding: "6px 12px",
									borderRadius: "8px",
									border: "1px solid #e2e8f0"
								},
								children: [/* @__PURE__ */ jsx(ShieldCheck, { style: {
									width: 16,
									height: 16,
									color: "#059669"
								} }), /* @__PURE__ */ jsx("span", { children: "NBFC & Legal PAP Compliance" })]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: "6px",
									background: "#ffffff",
									padding: "6px 12px",
									borderRadius: "8px",
									border: "1px solid #e2e8f0"
								},
								children: [/* @__PURE__ */ jsx(Clock, { style: {
									width: 16,
									height: 16,
									color: "#2563eb"
								} }), /* @__PURE__ */ jsx("span", { children: "Absolute Cap: 16 Months" })]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: "6px",
									background: "#ffffff",
									padding: "6px 12px",
									borderRadius: "8px",
									border: "1px solid #e2e8f0"
								},
								children: [/* @__PURE__ */ jsx("span", { style: {
									width: 8,
									height: 8,
									borderRadius: "50%",
									backgroundColor: "#f59e0b"
								} }), /* @__PURE__ */ jsx("span", { children: "Automatic Pause on Layoffs" })]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				style: {
					background: "#ffffff",
					borderRadius: "24px",
					border: "1px solid #e2e8f0",
					boxShadow: "0 15px 35px -5px rgba(15, 23, 42, 0.07)",
					padding: "2.5rem",
					marginBottom: "5.5rem"
				},
				children: [
					/* @__PURE__ */ jsxs("div", {
						style: { marginBottom: "2rem" },
						children: [
							/* @__PURE__ */ jsx("span", {
								style: {
									fontSize: "0.72rem",
									fontWeight: 800,
									color: "#2563eb",
									textTransform: "uppercase"
								},
								children: "INTERACTIVE EARNINGS MODEL"
							}),
							/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.65rem",
									fontWeight: 800,
									color: "#0f172a",
									marginTop: "4px"
								},
								children: "Simulate Your Post-Placement Monthly Take-Home"
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									color: "#64748b",
									fontSize: "0.88rem",
									marginTop: "4px"
								},
								children: "Adjust your projected annual salary. Payments only trigger once you join a company at or above ₹5,00,000 CTC."
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							background: "#f8fafc",
							border: "1px solid #e2e8f0",
							borderRadius: "16px",
							padding: "1.5rem 1.75rem",
							marginBottom: "2rem"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: "12px"
								},
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.75rem",
										fontWeight: 700,
										color: "#64748b",
										textTransform: "uppercase"
									},
									children: "PROJECTED ANNUAL CTC"
								}), /* @__PURE__ */ jsxs("div", {
									style: {
										fontSize: "1.85rem",
										fontWeight: 800,
										color: "#2563eb"
									},
									children: [
										"₹",
										ctcLpa.toFixed(1),
										" LPA"
									]
								})] }), /* @__PURE__ */ jsx("div", {
									style: { textAlign: "right" },
									children: /* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "0.74rem",
											fontWeight: 700,
											color: isQualifying ? "#059669" : "#dc2626",
											background: isQualifying ? "#ecfdf5" : "#fef2f2",
											padding: "4px 10px",
											borderRadius: "9999px"
										},
										children: isQualifying ? "QUALIFYING SALARY (≥ ₹5.0 LPA)" : "BELOW THRESHOLD (₹0 DUE)"
									})
								})]
							}),
							/* @__PURE__ */ jsx("input", {
								type: "range",
								min: "3.0",
								max: "30.0",
								step: "0.5",
								value: ctcLpa,
								onChange: (e) => setCtcLpa(parseFloat(e.target.value)),
								style: {
									width: "100%",
									margin: "10px 0"
								}
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									fontSize: "0.74rem",
									color: "#94a3b8",
									fontWeight: 600
								},
								children: [
									/* @__PURE__ */ jsx("span", { children: "₹3.0 LPA (₹0 Due)" }),
									/* @__PURE__ */ jsx("span", {
										style: {
											color: "#059669",
											fontWeight: 700
										},
										children: "₹5.0 LPA (ISA Threshold Trigger)"
									}),
									/* @__PURE__ */ jsx("span", { children: "₹12.0 LPA (Avg)" }),
									/* @__PURE__ */ jsx("span", { children: "₹30.0 LPA (Max Range)" })
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
							gap: "1.25rem",
							marginBottom: "2rem"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									background: "#f8fafc",
									padding: "1.25rem",
									borderRadius: "12px",
									border: "1px solid #e2e8f0"
								},
								children: [
									/* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "0.72rem",
											color: "#64748b",
											fontWeight: 700,
											textTransform: "uppercase"
										},
										children: "ESTIMATED MONTHLY GROSS"
									}),
									/* @__PURE__ */ jsxs("div", {
										style: {
											fontSize: "1.6rem",
											fontWeight: 800,
											color: "#0f172a",
											margin: "4px 0"
										},
										children: [
											formatINR(monthlyGross),
											" ",
											/* @__PURE__ */ jsx("span", {
												style: {
													fontSize: "0.85rem",
													fontWeight: 500,
													color: "#64748b"
												},
												children: "/ mo"
											})
										]
									}),
									/* @__PURE__ */ jsx("p", {
										style: {
											fontSize: "0.74rem",
											color: "#64748b"
										},
										children: "Before taxes and statutory deductions."
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									background: "#eff6ff",
									padding: "1.25rem",
									borderRadius: "12px",
									border: "1px solid #bfdbfe"
								},
								children: [
									/* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "0.72rem",
											color: "#1e40af",
											fontWeight: 700,
											textTransform: "uppercase"
										},
										children: "KARKA 15% SHARE"
									}),
									/* @__PURE__ */ jsxs("div", {
										style: {
											fontSize: "1.6rem",
											fontWeight: 800,
											color: "#1d4ed8",
											margin: "4px 0"
										},
										children: [
											formatINR(karkaShare),
											" ",
											/* @__PURE__ */ jsx("span", {
												style: {
													fontSize: "0.85rem",
													fontWeight: 500,
													color: "#1e40af"
												},
												children: "/ mo"
											})
										]
									}),
									/* @__PURE__ */ jsx("p", {
										style: {
											fontSize: "0.74rem",
											color: "#1e40af"
										},
										children: isQualifying ? "Auto-pauses if CTC falls below ₹5.0 LPA." : "Zero obligation below ₹5.0 LPA."
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									background: "#ecfdf5",
									padding: "1.25rem",
									borderRadius: "12px",
									border: "1px solid #a7f3d0"
								},
								children: [
									/* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "0.72rem",
											color: "#047857",
											fontWeight: 700,
											textTransform: "uppercase"
										},
										children: "YOUR MONTHLY IN-POCKET"
									}),
									/* @__PURE__ */ jsxs("div", {
										style: {
											fontSize: "1.6rem",
											fontWeight: 800,
											color: "#059669",
											margin: "4px 0"
										},
										children: [
											formatINR(inPocket),
											" ",
											/* @__PURE__ */ jsx("span", {
												style: {
													fontSize: "0.85rem",
													fontWeight: 500,
													color: "#047857"
												},
												children: "/ mo"
											})
										]
									}),
									/* @__PURE__ */ jsx("p", {
										style: {
											fontSize: "0.74rem",
											color: "#047857"
										},
										children: "85% remains exclusively in your account."
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									background: "#f8fafc",
									padding: "1.25rem",
									borderRadius: "12px",
									border: "1px solid #e2e8f0"
								},
								children: [
									/* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "0.72rem",
											color: "#64748b",
											fontWeight: 700,
											textTransform: "uppercase"
										},
										children: "REPAYMENT WINDOW"
									}),
									/* @__PURE__ */ jsx("div", {
										style: {
											fontSize: "1.6rem",
											fontWeight: 800,
											color: "#0f172a",
											margin: "4px 0"
										},
										children: "16 Months"
									}),
									/* @__PURE__ */ jsxs("p", {
										style: {
											fontSize: "0.74rem",
											color: "#64748b"
										},
										children: [
											"Total capped at ",
											formatINR(cappedTotal),
											" max. Payments terminate automatically."
										]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						style: { marginBottom: "1.5rem" },
						children: [/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								justifyContent: "space-between",
								fontSize: "0.78rem",
								fontWeight: 700,
								marginBottom: "6px"
							},
							children: [/* @__PURE__ */ jsxs("span", {
								style: { color: "#059669" },
								children: [
									"85% Learner Share (",
									formatINR(inPocket),
									")"
								]
							}), /* @__PURE__ */ jsxs("span", {
								style: { color: "#2563eb" },
								children: [
									"15% Karka Growth Share (",
									formatINR(karkaShare),
									")"
								]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							style: {
								width: "100%",
								height: "14px",
								borderRadius: "9999px",
								overflow: "hidden",
								display: "flex",
								background: "#e2e8f0"
							},
							children: [/* @__PURE__ */ jsx("div", { style: {
								width: "85%",
								height: "100%",
								backgroundColor: "#10b981"
							} }), /* @__PURE__ */ jsx("div", { style: {
								width: "15%",
								height: "100%",
								backgroundColor: "#2563eb"
							} })]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							fontSize: "0.76rem",
							color: "#64748b",
							display: "flex",
							alignItems: "center",
							gap: "6px"
						},
						children: [/* @__PURE__ */ jsx(ShieldCheck, { style: {
							width: 14,
							height: 14,
							color: "#059669"
						} }), /* @__PURE__ */ jsx("span", { children: "All agreements are backed by audited transparent contracts. No compound charges or hidden interests." })]
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				style: { marginBottom: "5.5rem" },
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						textAlign: "center",
						marginBottom: "3rem"
					},
					children: [
						/* @__PURE__ */ jsx("span", {
							style: {
								fontSize: "0.72rem",
								fontWeight: 700,
								color: "#2563eb",
								background: "#eff6ff",
								padding: "3px 10px",
								borderRadius: "9999px"
							},
							children: "LINE-BY-LINE COMPARISON"
						}),
						/* @__PURE__ */ jsx("h2", {
							style: {
								fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)",
								fontWeight: 800,
								color: "#0f172a",
								marginTop: "8px"
							},
							children: "Why Modern Engineers Reject Upfront Debt"
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								color: "#64748b",
								fontSize: "0.94rem",
								maxWidth: "640px",
								margin: "4px auto 0"
							},
							children: "Traditional degrees bill you regardless of your employability. Karka's entire operating model ceases to function if you don't succeed."
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						gap: "1.75rem"
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "karka-card",
							style: {
								padding: "2rem",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.75rem",
										fontWeight: 700,
										color: "#64748b"
									},
									children: "FORMAL EDUCATION"
								}),
								/* @__PURE__ */ jsx("h3", {
									style: {
										fontSize: "1.3rem",
										fontWeight: 800,
										color: "#0f172a",
										margin: "4px 0 12px"
									},
									children: "Traditional Degree"
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "1.4rem",
										fontWeight: 800,
										color: "#dc2626",
										marginBottom: "8px"
									},
									children: "₹8 Lakhs – ₹15 Lakhs"
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: "0.84rem",
										color: "#64748b",
										lineHeight: 1.6,
										marginBottom: "1rem"
									},
									children: "4 Long Years (48 Months). Zero placement guarantee (pay regardless). Outdated university syllabus with minimal real coding exposure."
								})
							] }), /* @__PURE__ */ jsx("div", {
								style: {
									padding: "8px",
									background: "#fef2f2",
									color: "#dc2626",
									borderRadius: "8px",
									fontSize: "0.75rem",
									fontWeight: 700,
									textAlign: "center"
								},
								children: "Average Outcome: High Student Debt"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "karka-card",
							style: {
								padding: "2rem",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.75rem",
										fontWeight: 700,
										color: "#64748b"
									},
									children: "RECORDED PLATFORMS"
								}),
								/* @__PURE__ */ jsx("h3", {
									style: {
										fontSize: "1.3rem",
										fontWeight: 800,
										color: "#0f172a",
										margin: "4px 0 12px"
									},
									children: "Generic Bootcamps"
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "1.4rem",
										fontWeight: 800,
										color: "#ea580c",
										marginBottom: "8px"
									},
									children: "₹50,000 – ₹1.5 Lakhs"
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: "0.84rem",
										color: "#64748b",
										lineHeight: 1.6,
										marginBottom: "1rem"
									},
									children: "3 to 6 Months. Pre-recorded Udemy-style modules with robotic email support. Less than 12% industry completion rate."
								})
							] }), /* @__PURE__ */ jsx("div", {
								style: {
									padding: "8px",
									background: "#fff7ed",
									color: "#ea580c",
									borderRadius: "8px",
									fontSize: "0.75rem",
									fontWeight: 700,
									textAlign: "center"
								},
								children: "Average Outcome: Abandoned Courses"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								padding: "2rem",
								borderRadius: "20px",
								background: "linear-gradient(135deg, #1e40af 0%, #2563eb 100%)",
								color: "#ffffff",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								boxShadow: "0 15px 35px -5px rgba(37, 99, 235, 0.4)",
								position: "relative"
							},
							children: [
								/* @__PURE__ */ jsx("div", {
									style: {
										position: "absolute",
										top: "-12px",
										right: "1.5rem",
										background: "#ea580c",
										color: "#ffffff",
										fontSize: "0.68rem",
										fontWeight: 800,
										padding: "3px 12px",
										borderRadius: "9999px"
									},
									children: "100% SKIN IN THE GAME"
								}),
								/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "0.75rem",
											fontWeight: 700,
											color: "#93c5fd"
										},
										children: "APPRENTICESHIP LAB"
									}),
									/* @__PURE__ */ jsx("h3", {
										style: {
											fontSize: "1.3rem",
											fontWeight: 800,
											color: "#ffffff",
											margin: "4px 0 12px"
										},
										children: "Karka AI Academy"
									}),
									/* @__PURE__ */ jsx("div", {
										style: {
											fontSize: "1.6rem",
											fontWeight: 800,
											color: "#ffffff",
											marginBottom: "8px"
										},
										children: "₹0 Upfront (Zero Initial Fee)"
									}),
									/* @__PURE__ */ jsx("p", {
										style: {
											fontSize: "0.84rem",
											color: "#dbeafe",
											lineHeight: 1.6,
											marginBottom: "1rem"
										},
										children: "6 Months Rigorous Apprenticeship. Placement Guarantee: ≥ ₹5.0 LPA or you pay ₹0. Autonomous AI agents, distributed infra, and staff PR reviews."
									})
								] }),
								/* @__PURE__ */ jsx("div", {
									style: {
										padding: "8px",
										background: "rgba(255, 255, 255, 0.15)",
										color: "#ffffff",
										borderRadius: "8px",
										fontSize: "0.75rem",
										fontWeight: 700,
										textAlign: "center"
									},
									children: "Average Outcome: ₹8.4 LPA Audited Average"
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				style: { marginBottom: "5.5rem" },
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-end",
						flexWrap: "wrap",
						gap: "1rem",
						marginBottom: "2.5rem"
					},
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("span", {
							style: {
								fontSize: "0.72rem",
								fontWeight: 700,
								color: "#2563eb"
							},
							children: "UNCOMPROMISING INTEGRITY"
						}),
						/* @__PURE__ */ jsx("h2", {
							style: {
								fontSize: "1.85rem",
								fontWeight: 800,
								color: "#0f172a",
								marginTop: "4px"
							},
							children: "The 4 Cardinal Rules of Karka ISA"
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								color: "#64748b",
								fontSize: "0.92rem",
								marginTop: "4px"
							},
							children: "We operate under a legally transparent Income Share Agreement backed by certified NBFCs in India."
						})
					] }), /* @__PURE__ */ jsxs("button", {
						onClick: onOpenISA,
						className: "btn-secondary",
						style: {
							display: "flex",
							alignItems: "center",
							gap: "6px"
						},
						children: [/* @__PURE__ */ jsx(Download, { style: {
							width: 14,
							height: 14
						} }), /* @__PURE__ */ jsx("span", { children: "Download Sample ISA Agreement (PDF)" })]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
						gap: "1.5rem"
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "karka-card",
							style: { padding: "1.75rem" },
							children: [
								/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.85rem",
										fontWeight: 800,
										color: "#2563eb",
										background: "#eff6ff",
										padding: "4px 10px",
										borderRadius: "6px",
										display: "inline-block",
										marginBottom: "12px"
									},
									children: "01"
								}),
								/* @__PURE__ */ jsx("h3", {
									style: {
										fontSize: "1.15rem",
										fontWeight: 800,
										color: "#0f172a",
										marginBottom: "8px"
									},
									children: "The ₹5 LPA Minimum Threshold"
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: "0.84rem",
										color: "#64748b",
										lineHeight: 1.6
									},
									children: "If your starting offer or aggregate yearly package is under ₹5,00,000, your repayment is strictly ₹0. You keep 100% of your earnings. We cannot renegotiate downwards under any circumstance."
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "karka-card",
							style: { padding: "1.75rem" },
							children: [
								/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.85rem",
										fontWeight: 800,
										color: "#ea580c",
										background: "#fff7ed",
										padding: "4px 10px",
										borderRadius: "6px",
										display: "inline-block",
										marginBottom: "12px"
									},
									children: "02"
								}),
								/* @__PURE__ */ jsx("h3", {
									style: {
										fontSize: "1.15rem",
										fontWeight: 800,
										color: "#0f172a",
										marginBottom: "8px"
									},
									children: "Absolute Maximum Payment Cap"
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: "0.84rem",
										color: "#64748b",
										lineHeight: 1.6
									},
									children: "Even if you land a ₹30 LPA or ₹40 LPA offer at a global Tier-1 tech enterprise, your total payments to Karka will NEVER exceed ₹2,40,000. Once this ceiling is reached, your agreement terminates immediately."
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "karka-card",
							style: { padding: "1.75rem" },
							children: [
								/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.85rem",
										fontWeight: 800,
										color: "#059669",
										background: "#ecfdf5",
										padding: "4px 10px",
										borderRadius: "6px",
										display: "inline-block",
										marginBottom: "12px"
									},
									children: "03"
								}),
								/* @__PURE__ */ jsx("h3", {
									style: {
										fontSize: "1.15rem",
										fontWeight: 800,
										color: "#0f172a",
										marginBottom: "8px"
									},
									children: "Automatic Pause & Layoff Grace"
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: "0.84rem",
										color: "#64748b",
										lineHeight: 1.6
									},
									children: "Tech market cycles happen. If you encounter a layoff, health emergency, or employer restructuring, monthly deductions pause automatically until your next qualifying role commences."
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "karka-card",
							style: { padding: "1.75rem" },
							children: [
								/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.85rem",
										fontWeight: 800,
										color: "#7c3aed",
										background: "#f5f3ff",
										padding: "4px 10px",
										borderRadius: "6px",
										display: "inline-block",
										marginBottom: "12px"
									},
									children: "04"
								}),
								/* @__PURE__ */ jsx("h3", {
									style: {
										fontSize: "1.15rem",
										fontWeight: 800,
										color: "#0f172a",
										marginBottom: "8px"
									},
									children: "7-Day Zero Liability Cohort Trial"
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: "0.84rem",
										color: "#64748b",
										lineHeight: 1.6
									},
									children: "Experience the daily intensity of live code reviews, algorithm sprints, and peer programming for 7 full business days. If you realize the rigor isn't the right fit, drop out with zero liability."
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				style: {
					maxWidth: "840px",
					margin: "0 auto 5.5rem"
				},
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						textAlign: "center",
						marginBottom: "2.5rem"
					},
					children: [/* @__PURE__ */ jsx("h2", {
						style: {
							fontSize: "1.85rem",
							fontWeight: 800,
							color: "#0f172a"
						},
						children: "Frequently Asked Questions on PAP"
					}), /* @__PURE__ */ jsx("p", {
						style: {
							color: "#64748b",
							fontSize: "0.92rem",
							marginTop: "4px"
						},
						children: "Everything you need to know about our selection criteria, agreements, and payment logistics."
					})]
				}), /* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						flexDirection: "column",
						gap: "0.75rem"
					},
					children: papFaqs.map((faq, idx) => {
						const isOpen = openFaqIndex === idx;
						return /* @__PURE__ */ jsxs("div", {
							style: {
								background: "#ffffff",
								border: "1px solid #e2e8f0",
								borderRadius: "12px",
								overflow: "hidden"
							},
							children: [/* @__PURE__ */ jsxs("button", {
								onClick: () => setOpenFaqIndex(isOpen ? -1 : idx),
								style: {
									width: "100%",
									padding: "1.25rem 1.5rem",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									gap: "1rem",
									background: "transparent",
									border: "none",
									textAlign: "left",
									cursor: "pointer",
									fontSize: "0.95rem",
									fontWeight: 700,
									color: isOpen ? "#2563eb" : "#0f172a"
								},
								children: [/* @__PURE__ */ jsx("span", { children: faq.question }), /* @__PURE__ */ jsx(ChevronDown, { style: {
									width: 18,
									height: 18,
									transform: isOpen ? "rotate(180deg)" : "none",
									transition: "transform 0.16s ease",
									flexShrink: 0,
									color: isOpen ? "#2563eb" : "#94a3b8"
								} })]
							}), isOpen && /* @__PURE__ */ jsx("div", {
								style: {
									padding: "0 1.5rem 1.25rem",
									color: "#475569",
									fontSize: "0.88rem",
									lineHeight: 1.65,
									borderTop: "1px solid #f8fafc"
								},
								className: "animate-fade-in",
								children: faq.answer
							})]
						}, idx);
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				style: {
					background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #1e40af 100%)",
					borderRadius: "24px",
					padding: "3.5rem 2rem",
					textAlign: "center",
					color: "#ffffff",
					boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.4)"
				},
				children: [
					/* @__PURE__ */ jsx("h2", {
						style: {
							fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)",
							fontWeight: 800,
							marginBottom: "10px"
						},
						children: "Ready to Build Your Engineering Career with Zero Financial Risk?"
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: "#bfdbfe",
							fontSize: "1rem",
							maxWidth: "620px",
							margin: "0 auto 2rem",
							lineHeight: 1.6
						},
						children: "Take the 60-second eligibility quiz. No credit checks, no upfront down payments. Only pay if you land ₹5+ LPA."
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							justifyContent: "center",
							gap: "1rem",
							flexWrap: "wrap"
						},
						children: [/* @__PURE__ */ jsxs("button", {
							onClick: onOpenEligibility,
							style: {
								backgroundColor: "#ea580c",
								color: "#ffffff",
								fontWeight: 700,
								fontSize: "0.94rem",
								padding: "0.75rem 1.6rem",
								borderRadius: "10px",
								border: "none",
								cursor: "pointer",
								display: "inline-flex",
								alignItems: "center",
								gap: "6px"
							},
							children: [/* @__PURE__ */ jsx("span", { children: "Check Your PAP Eligibility in 60 Seconds" }), /* @__PURE__ */ jsx(ArrowRight, { style: {
								width: 14,
								height: 14
							} })]
						}), /* @__PURE__ */ jsxs("button", {
							onClick: onOpenCounselor,
							style: {
								backgroundColor: "rgba(255, 255, 255, 0.15)",
								color: "#ffffff",
								fontWeight: 600,
								fontSize: "0.94rem",
								padding: "0.75rem 1.6rem",
								borderRadius: "10px",
								border: "1px solid rgba(255, 255, 255, 0.3)",
								cursor: "pointer",
								display: "inline-flex",
								alignItems: "center",
								gap: "6px"
							},
							children: [/* @__PURE__ */ jsx(Phone, { style: {
								width: 16,
								height: 16
							} }), /* @__PURE__ */ jsx("span", { children: "Talk to Counselor" })]
						})]
					})
				]
			})
		]
	});
}
// src/data/placementsData.js
const placementStats = {
	placementRate: "94.8%",
	placementAuditText: "Third-Party Audited",
	averageCtc: "₹8.4 LPA",
	ctcMedianText: "Median ₹7.8L - ₹9.2L",
	highestCtc: "₹21 LPA",
	highestTrackText: "Lead Track Tier-1 Grad",
	hiringPartners: "250+",
	partnerTypesText: "Unicorns & AI Labs"
};
const studentOffers = [
	{
		id: "priya-s",
		name: "Priya S.",
		category: "non-cs",
		avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
		before: "Operations/BPO Tech Exec",
		after: "Zoho Corp",
		companyLogo: "ZOHO",
		role: "Software Engineer — Enterprise Systems",
		package: "₹9.5 LPA",
		auditId: "Audit ID #KRA-2024-032",
		track: "AI Full-Stack AI",
		quote: "Coming from accounting, I dreaded technical commands. Karka's 24-week daily live coding pods stripped the fear away. Within 3 months, I was shipping Next.js microservices."
	},
	{
		id: "arun-kumar",
		name: "Arun Kumar",
		category: "non-cs",
		avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
		before: "BE Mechanical (0 Code)",
		after: "Razorpay Corp",
		companyLogo: "RAZORPAY",
		role: "AI Systems Developer — LLM Orchestration",
		package: "₹14.2 LPA",
		auditId: "Audit ID #KRA-2024-114",
		track: "Agentic Systems Track",
		quote: "Campus placements gave us call-center jobs. At Karka, I engineered an autonomous Agentic Fraud Shield using LangGraph & FastAPI that directly amazed my interviewers at Razorpay."
	},
	{
		id: "divya-m",
		name: "Divya M.",
		category: "fresh-grad",
		avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
		before: "Unplaced Final Year",
		after: "Freshworks",
		companyLogo: "FRESHWORKS",
		role: "Full-Stack Engineer — Platform Core",
		package: "₹8.8 LPA",
		auditId: "Audit ID #KRA-2024-079",
		track: "Full-Stack AI Track",
		quote: "The FAANG mock interviews simulated real stress. My mentor tore down my system design code in weeks 18-20, making the actual Freshworks rounds feel effortless."
	},
	{
		id: "karthik-r",
		name: "Karthik R.",
		category: "non-cs",
		avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
		before: "Unpaid Intern (0 LPA)",
		after: "Razorpay",
		companyLogo: "RAZORPAY",
		role: "Backend Engineer — Payments Rail",
		package: "₹11.5 LPA",
		auditId: "Audit ID #KRA-2024-211",
		track: "Distributed Systems",
		quote: "Traditional recruiters filtered my resume out automatically. Karka bypassed the gatekeepers with direct code audits for partner hiring managers. Placed in 4 months."
	},
	{
		id: "sandhya-n",
		name: "Sandhya N.",
		category: "tier-3",
		avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
		before: "Support Desk (3.1 LPA)",
		after: "Swiggy",
		companyLogo: "SWIGGY",
		role: "Applied ML Engineer — Demand Forecasting",
		package: "₹13.0 LPA",
		auditId: "Audit ID #KRA-2024-189",
		track: "Applied ML Track",
		quote: "I built a high-throughput real-time route optimization model during the production residency. In my Swiggy interview, we spent 45 minutes discussing my architecture choices."
	},
	{
		id: "vignesh-p",
		name: "Vignesh P.",
		category: "fresh-grad",
		avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
		before: "Physics Major (0 Code)",
		after: "Chargebee",
		companyLogo: "CHARGEBEE",
		role: "Product Engineer — Microservices",
		package: "₹10.2 LPA",
		auditId: "Audit ID #KRA-2024-302",
		track: "Full-Stack AI Track",
		quote: "Pay After Placement meant zero financial pressure on my family. Karka didn't just teach code, they taught me how to articulate distributed system tradeoffs."
	}
];
const instagramProofWall = [
	{
		id: "ig-1",
		title: "Tradition: Bell-Ringing Ceremony",
		description: "24 students placed this week alone",
		views: "4.2k views",
		tag: "Campus Tradition",
		gradient: "from-amber-600 to-rose-600",
		image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80"
	},
	{
		id: "ig-2",
		title: "Real Whiteboard Grinds",
		description: "Systems breakdown with Swiggy PE/E4",
		views: "6.8k views",
		tag: "Mock Sessions",
		gradient: "from-blue-600 to-indigo-600",
		image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&auto=format&fit=crop&q=80"
	},
	{
		id: "ig-3",
		title: "From Unemployed to ₹11.5 LPA",
		description: "Karthik unboxes his Razorpay tech kit",
		views: "12.1k views",
		tag: "Unboxing Story",
		gradient: "from-emerald-600 to-teal-600",
		image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80"
	},
	{
		id: "ig-4",
		title: "Pitching to CTOs Directly",
		description: "Instant interview invites issued on spot",
		views: "8.4k views",
		tag: "Demo Day",
		gradient: "from-violet-600 to-purple-600",
		image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
	}
];
const ctcDistribution = [
	{
		label: "< ₹6L",
		percentage: 5,
		color: "#94A3B8"
	},
	{
		label: "₹6 - ₹8L",
		percentage: 28,
		color: "#60A5FA"
	},
	{
		label: "₹8 - ₹12L",
		percentage: 47,
		color: "#2563EB",
		isHighest: true
	},
	{
		label: "₹12 - ₹16L",
		percentage: 15,
		color: "#3B82F6"
	},
	{
		label: "₹16L+",
		percentage: 5,
		color: "#F59E0B"
	}
];
// src/pages/PlacementsPage.jsx
function PlacementsPage({ onOpenAssessment, onOpenCounselor }) {
	const [activeFilter, setActiveFilter] = useState("all");
	const filterOptions = [
		{
			key: "all",
			label: "All Switchers"
		},
		{
			key: "non-cs",
			label: "Non-CS Switch"
		},
		{
			key: "tier-3",
			label: "Tier-3 College"
		},
		{
			key: "fresh-grad",
			label: "Fresh Graduate"
		}
	];
	const filteredStudents = activeFilter === "all" ? studentOffers : studentOffers.filter((s) => s.category === activeFilter);
	return /* @__PURE__ */ jsxs("div", {
		style: {
			maxWidth: "1280px",
			margin: "0 auto",
			padding: "3.5rem 1.5rem"
		},
		children: [
			/* @__PURE__ */ jsxs("div", {
				style: {
					textAlign: "center",
					marginBottom: "3.5rem"
				},
				children: [
					/* @__PURE__ */ jsx("span", {
						style: {
							fontSize: "0.74rem",
							fontWeight: 800,
							textTransform: "uppercase",
							letterSpacing: "0.06em",
							color: "#059669",
							background: "#ecfdf5",
							border: "1px solid #a7f3d0",
							padding: "5px 14px",
							borderRadius: "9999px",
							display: "inline-block",
							marginBottom: "1rem"
						},
						children: "AUDITED PLACEMENT RECORDS • CLASS OF 2024 - 2026"
					}),
					/* @__PURE__ */ jsxs("h1", {
						style: {
							fontSize: "clamp(2.1rem, 4.5vw, 3.4rem)",
							fontWeight: 800,
							color: "#0f172a",
							letterSpacing: "-0.02em",
							lineHeight: 1.2
						},
						children: [
							"Real Offers. Verified CTCs. ",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								style: {
									background: "linear-gradient(135deg, #2563eb 0%, #0284c7 100%)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent"
								},
								children: "Zero Fake Claims."
							})
						]
					}),
					/* @__PURE__ */ jsxs("p", {
						style: {
							color: "#64748b",
							fontSize: "1.05rem",
							maxWidth: "680px",
							margin: "12px auto 2.5rem",
							lineHeight: 1.6
						},
						children: [
							"Every single offer letter and transition story is third-party audited and celebrated live on our Instagram (",
							/* @__PURE__ */ jsx("strong", {
								style: { color: "#2563eb" },
								children: "@karka.ai"
							}),
							")"
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
							gap: "1.25rem",
							background: "#ffffff",
							borderRadius: "20px",
							border: "1px solid #e2e8f0",
							boxShadow: "0 10px 30px -5px rgba(15, 23, 42, 0.05)",
							padding: "2rem 1.5rem"
						},
						children: [
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "clamp(2rem, 3.5vw, 2.7rem)",
										fontWeight: 800,
										color: "#059669",
										lineHeight: 1
									},
									children: placementStats.placementRate
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "0.78rem",
										fontWeight: 800,
										color: "#0f172a",
										textTransform: "uppercase",
										marginTop: "6px"
									},
									children: "PLACEMENT RATE"
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "0.72rem",
										color: "#64748b"
									},
									children: placementStats.placementAuditText
								})
							] }),
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "clamp(2rem, 3.5vw, 2.7rem)",
										fontWeight: 800,
										color: "#2563eb",
										lineHeight: 1
									},
									children: placementStats.averageCtc
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "0.78rem",
										fontWeight: 800,
										color: "#0f172a",
										textTransform: "uppercase",
										marginTop: "6px"
									},
									children: "AVERAGE CTC"
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "0.72rem",
										color: "#64748b"
									},
									children: placementStats.ctcMedianText
								})
							] }),
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "clamp(2rem, 3.5vw, 2.7rem)",
										fontWeight: 800,
										color: "#ea580c",
										lineHeight: 1
									},
									children: placementStats.highestCtc
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "0.78rem",
										fontWeight: 800,
										color: "#0f172a",
										textTransform: "uppercase",
										marginTop: "6px"
									},
									children: "HIGHEST CTC"
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "0.72rem",
										color: "#64748b"
									},
									children: placementStats.highestTrackText
								})
							] }),
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "clamp(2rem, 3.5vw, 2.7rem)",
										fontWeight: 800,
										color: "#0f172a",
										lineHeight: 1
									},
									children: placementStats.hiringPartners
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "0.78rem",
										fontWeight: 800,
										color: "#0f172a",
										textTransform: "uppercase",
										marginTop: "6px"
									},
									children: "HIRING PARTNERS"
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "0.72rem",
										color: "#64748b"
									},
									children: placementStats.partnerTypesText
								})
							] })
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				style: { marginBottom: "5.5rem" },
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-end",
						flexWrap: "wrap",
						gap: "1rem",
						marginBottom: "1.75rem"
					},
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
						style: {
							fontSize: "0.72rem",
							fontWeight: 800,
							color: "#2563eb",
							textTransform: "uppercase"
						},
						children: "TRUSTED ECOSYSTEM"
					}), /* @__PURE__ */ jsx("h2", {
						style: {
							fontSize: "1.7rem",
							fontWeight: 800,
							color: "#0f172a",
							marginTop: "4px"
						},
						children: "Where Our Alumni Ship Production Code"
					})] }), /* @__PURE__ */ jsx("p", {
						style: {
							color: "#64748b",
							fontSize: "0.84rem",
							maxWidth: "400px"
						},
						children: "From rapid-scale YC/Sequoia startups to global cloud engineering giants."
					})]
				}), /* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
						gap: "1.25rem"
					},
					children: allEcosystemPartners.map((c, idx) => {
						const LogoComp = c.logo;
						return /* @__PURE__ */ jsxs("div", {
							className: "karka-card",
							style: {
								padding: "1.5rem 1.25rem",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								textAlign: "center",
								gap: "8px"
							},
							children: [
								/* @__PURE__ */ jsx("div", {
									style: {
										width: "44px",
										height: "44px",
										borderRadius: "12px",
										backgroundColor: "#f8fafc",
										border: "1px solid #e2e8f0",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										marginBottom: "4px"
									},
									children: /* @__PURE__ */ jsx(LogoComp, { size: 24 })
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "1.1rem",
										fontWeight: 800,
										color: "#0f172a"
									},
									children: c.name
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "0.74rem",
										color: "#64748b"
									},
									children: c.subtitle
								})
							]
						}, idx);
					})
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				style: { marginBottom: "5.5rem" },
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexWrap: "wrap",
						gap: "1rem",
						marginBottom: "2.5rem"
					},
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("span", {
							style: {
								fontSize: "0.72rem",
								fontWeight: 800,
								color: "#ea580c",
								textTransform: "uppercase"
							},
							children: "UNFILTERED CAREER TRANSFORMATIONS"
						}),
						/* @__PURE__ */ jsx("h2", {
							style: {
								fontSize: "1.75rem",
								fontWeight: 800,
								color: "#0f172a",
								marginTop: "4px"
							},
							children: "Verified Student Switchers & Offer Wall"
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								color: "#64748b",
								fontSize: "0.86rem",
								marginTop: "4px"
							},
							children: "Real engineers. Real packages. Zero educational prerequisites required."
						})
					] }), /* @__PURE__ */ jsx("div", {
						style: {
							display: "flex",
							gap: "6px",
							background: "#f1f5f9",
							padding: "4px",
							borderRadius: "9999px"
						},
						children: filterOptions.map((opt) => {
							const isActive = activeFilter === opt.key;
							return /* @__PURE__ */ jsx("button", {
								onClick: () => setActiveFilter(opt.key),
								style: {
									background: isActive ? "#2563eb" : "transparent",
									color: isActive ? "#ffffff" : "#475569",
									border: "none",
									padding: "6px 14px",
									borderRadius: "9999px",
									fontSize: "0.8rem",
									fontWeight: isActive ? 700 : 500,
									cursor: "pointer",
									transition: "all 0.14s ease"
								},
								children: opt.label
							}, opt.key);
						})
					})]
				}), /* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
						gap: "1.75rem"
					},
					children: filteredStudents.map((student) => /* @__PURE__ */ jsxs("div", {
						className: "karka-card",
						style: {
							padding: "2rem",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between"
						},
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									alignItems: "flex-start",
									marginBottom: "1.25rem"
								},
								children: [/* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										alignItems: "center",
										gap: "12px"
									},
									children: [/* @__PURE__ */ jsx("img", {
										src: student.avatar,
										alt: student.name,
										style: {
											width: "48px",
											height: "48px",
											borderRadius: "50%",
											objectFit: "cover"
										}
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										style: {
											fontSize: "1.05rem",
											fontWeight: 800,
											color: "#0f172a"
										},
										children: student.name
									}), /* @__PURE__ */ jsx("p", {
										style: {
											fontSize: "0.74rem",
											color: "#64748b"
										},
										children: student.before
									})] })]
								}), /* @__PURE__ */ jsxs("span", {
									style: {
										display: "inline-flex",
										alignItems: "center",
										gap: "4px",
										background: "#ecfdf5",
										color: "#059669",
										fontSize: "0.7rem",
										fontWeight: 700,
										padding: "3px 8px",
										borderRadius: "9999px",
										border: "1px solid #a7f3d0"
									},
									children: [/* @__PURE__ */ jsx(CheckCircle, { style: {
										width: 12,
										height: 12
									} }), /* @__PURE__ */ jsx("span", { children: "Verified Offer" })]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									background: "#f8fafc",
									border: "1px solid #e2e8f0",
									borderRadius: "8px",
									padding: "8px 12px",
									marginBottom: "1rem",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									fontSize: "0.76rem"
								},
								children: [
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										style: {
											color: "#94a3b8",
											fontSize: "0.68rem",
											display: "block"
										},
										children: "BEFORE:"
									}), /* @__PURE__ */ jsx("strong", {
										style: { color: "#475569" },
										children: student.before
									})] }),
									/* @__PURE__ */ jsx("span", {
										style: {
											color: "#2563eb",
											fontWeight: 800
										},
										children: "→"
									}),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										style: {
											color: "#94a3b8",
											fontSize: "0.68rem",
											display: "block"
										},
										children: "AFTER:"
									}), /* @__PURE__ */ jsx("strong", {
										style: { color: "#2563eb" },
										children: student.after
									})] })
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									alignItems: "flex-end",
									marginBottom: "1rem"
								},
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.7rem",
										color: "#64748b"
									},
									children: "Placed Role & Package"
								}), /* @__PURE__ */ jsx("h5", {
									style: {
										fontSize: "0.92rem",
										fontWeight: 800,
										color: "#0f172a"
									},
									children: student.role
								})] }), /* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "1.45rem",
										fontWeight: 800,
										color: "#2563eb"
									},
									children: student.package
								})]
							}),
							/* @__PURE__ */ jsxs("p", {
								style: {
									fontSize: "0.84rem",
									color: "#475569",
									lineHeight: 1.6,
									fontStyle: "italic",
									marginBottom: "1.25rem"
								},
								children: [
									"\"",
									student.quote,
									"\""
								]
							})
						] }), /* @__PURE__ */ jsxs("div", {
							style: {
								paddingTop: "10px",
								borderTop: "1px solid #f1f5f9",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								fontSize: "0.74rem"
							},
							children: [/* @__PURE__ */ jsx("span", {
								style: {
									color: "#64748b",
									fontFamily: "var(--font-mono)"
								},
								children: student.auditId
							}), /* @__PURE__ */ jsx("span", {
								style: {
									color: "#2563eb",
									fontWeight: 600
								},
								children: student.track
							})]
						})]
					}, student.id))
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				style: { marginBottom: "5.5rem" },
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-end",
						flexWrap: "wrap",
						gap: "1rem",
						marginBottom: "2rem"
					},
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("span", {
							style: {
								fontSize: "0.72rem",
								fontWeight: 800,
								color: "#ea580c",
								textTransform: "uppercase"
							},
							children: "DAILY LIVE TRANSPARENCY"
						}),
						/* @__PURE__ */ jsx("h2", {
							style: {
								fontSize: "1.75rem",
								fontWeight: 800,
								color: "#0f172a",
								marginTop: "4px"
							},
							children: "The Instagram Proof Wall"
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								color: "#64748b",
								fontSize: "0.86rem",
								marginTop: "4px"
							},
							children: "Every bell-ring, offer unboxing, and mock interview debrief broadcast unfiltered."
						})
					] }), /* @__PURE__ */ jsxs("a", {
						href: "https://instagram.com",
						target: "_blank",
						rel: "noreferrer",
						className: "btn-secondary",
						style: {
							display: "flex",
							alignItems: "center",
							gap: "6px",
							color: "#ea580c",
							borderColor: "#fdba74"
						},
						children: [/* @__PURE__ */ jsx(Instagram, { style: {
							width: 16,
							height: 16
						} }), /* @__PURE__ */ jsx("span", { children: "Follow Daily Drops @karka.ai →" })]
					})]
				}), /* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
						gap: "1.5rem"
					},
					children: instagramProofWall.map((item) => /* @__PURE__ */ jsxs("div", {
						className: "karka-card",
						style: {
							overflow: "hidden",
							borderRadius: "16px"
						},
						children: [/* @__PURE__ */ jsxs("div", {
							style: {
								position: "relative",
								height: "170px",
								overflow: "hidden"
							},
							children: [/* @__PURE__ */ jsx("img", {
								src: item.image,
								alt: item.title,
								style: {
									width: "100%",
									height: "100%",
									objectFit: "cover"
								}
							}), /* @__PURE__ */ jsx("div", {
								style: {
									position: "absolute",
									top: "10px",
									left: "10px",
									background: "rgba(0, 0, 0, 0.65)",
									color: "#ffffff",
									fontSize: "0.68rem",
									fontWeight: 700,
									padding: "2px 8px",
									borderRadius: "9999px",
									backdropFilter: "blur(4px)"
								},
								children: item.tag
							})]
						}), /* @__PURE__ */ jsxs("div", {
							style: { padding: "1.25rem" },
							children: [
								/* @__PURE__ */ jsx("h4", {
									style: {
										fontSize: "0.98rem",
										fontWeight: 800,
										color: "#0f172a",
										marginBottom: "4px"
									},
									children: item.title
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: "0.8rem",
										color: "#64748b",
										marginBottom: "10px"
									},
									children: item.description
								}),
								/* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										fontSize: "0.74rem",
										color: "#2563eb",
										fontWeight: 600
									},
									children: [/* @__PURE__ */ jsxs("span", {
										style: { color: "#64748b" },
										children: ["👁 ", item.views]
									}), /* @__PURE__ */ jsx("span", { children: "View on Instagram ↗" })]
								})
							]
						})]
					}, item.id))
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				style: {
					background: "#ffffff",
					borderRadius: "24px",
					border: "1px solid #e2e8f0",
					padding: "2.5rem",
					boxShadow: "0 10px 30px -5px rgba(15, 23, 42, 0.05)",
					marginBottom: "5.5rem"
				},
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-start",
						flexWrap: "wrap",
						gap: "1.5rem",
						marginBottom: "2.5rem"
					},
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("span", {
							style: {
								fontSize: "0.72rem",
								fontWeight: 800,
								color: "#2563eb",
								textTransform: "uppercase"
							},
							children: "CTC DISTRIBUTION BREAKDOWN"
						}),
						/* @__PURE__ */ jsx("h2", {
							style: {
								fontSize: "1.75rem",
								fontWeight: 800,
								color: "#0f172a",
								marginTop: "4px"
							},
							children: "Proof in the Distribution Curve"
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								color: "#64748b",
								fontSize: "0.88rem",
								marginTop: "4px",
								maxWidth: "580px"
							},
							children: "While industry averages linger at ₹3.5 LPA for fresh engineers, 95% of Karka cohorts cross ₹6.0 LPA on their very first tech switch."
						})
					] }), /* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							gap: "12px",
							fontSize: "0.75rem",
							color: "#64748b"
						},
						children: [
							/* @__PURE__ */ jsxs("span", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: "4px"
								},
								children: [/* @__PURE__ */ jsx("span", { style: {
									width: 10,
									height: 10,
									borderRadius: "2px",
									backgroundColor: "#2563eb"
								} }), "₹8-12 LPA (47%)"]
							}),
							/* @__PURE__ */ jsxs("span", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: "4px"
								},
								children: [/* @__PURE__ */ jsx("span", { style: {
									width: 10,
									height: 10,
									borderRadius: "2px",
									backgroundColor: "#60a5fa"
								} }), "₹6-8 LPA (28%)"]
							}),
							/* @__PURE__ */ jsxs("span", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: "4px"
								},
								children: [/* @__PURE__ */ jsx("span", { style: {
									width: 10,
									height: 10,
									borderRadius: "2px",
									backgroundColor: "#f59e0b"
								} }), "₹16L+ (5%)"]
							})
						]
					})]
				}), /* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						alignItems: "flex-end",
						justifyContent: "space-between",
						gap: "1.5rem",
						height: "200px",
						paddingTop: "20px",
						borderBottom: "2px solid #e2e8f0"
					},
					children: ctcDistribution.map((bar, idx) => /* @__PURE__ */ jsxs("div", {
						style: {
							flex: 1,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							height: "100%",
							justifyContent: "flex-end"
						},
						children: [
							/* @__PURE__ */ jsxs("span", {
								style: {
									fontSize: "0.82rem",
									fontWeight: 800,
									color: bar.isHighest ? "#2563eb" : "#475569",
									marginBottom: "8px"
								},
								children: [bar.percentage, "%"]
							}),
							/* @__PURE__ */ jsx("div", { style: {
								width: "100%",
								maxWidth: "75px",
								height: `${bar.percentage * 3.4}px`,
								backgroundColor: bar.color,
								borderRadius: "6px 6px 0 0",
								boxShadow: bar.isHighest ? "0 4px 14px rgba(37, 99, 235, 0.4)" : "none",
								transition: "height 0.32s ease"
							} }),
							/* @__PURE__ */ jsx("span", {
								style: {
									fontSize: "0.76rem",
									fontWeight: 600,
									color: "#64748b",
									marginTop: "10px"
								},
								children: bar.label
							})
						]
					}, idx))
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				style: {
					background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #1e40af 100%)",
					borderRadius: "24px",
					padding: "3.5rem 2rem",
					textAlign: "center",
					color: "#ffffff",
					boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.4)"
				},
				children: [
					/* @__PURE__ */ jsx("span", {
						style: {
							fontSize: "0.74rem",
							fontWeight: 800,
							background: "rgba(255, 255, 255, 0.15)",
							padding: "4px 12px",
							borderRadius: "9999px",
							display: "inline-block",
							marginBottom: "10px"
						},
						children: "Zero Upfront Fees • Pay After Placement"
					}),
					/* @__PURE__ */ jsx("h2", {
						style: {
							fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)",
							fontWeight: 800,
							marginBottom: "10px"
						},
						children: "Become Our Next Placement Success Story."
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: "#bfdbfe",
							fontSize: "1rem",
							maxWidth: "620px",
							margin: "0 auto 2rem",
							lineHeight: 1.6
						},
						children: "Join the upcoming cohort. Build verified production systems, get audited by real engineering leaders, and land life-altering compensation."
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							justifyContent: "center",
							gap: "1rem",
							flexWrap: "wrap"
						},
						children: [/* @__PURE__ */ jsxs("button", {
							onClick: () => onOpenAssessment(),
							style: {
								backgroundColor: "#ea580c",
								color: "#ffffff",
								fontWeight: 700,
								fontSize: "0.94rem",
								padding: "0.75rem 1.6rem",
								borderRadius: "10px",
								border: "none",
								cursor: "pointer",
								display: "inline-flex",
								alignItems: "center",
								gap: "6px"
							},
							children: [/* @__PURE__ */ jsx("span", { children: "Apply Now" }), /* @__PURE__ */ jsx(ArrowRight, { style: {
								width: 14,
								height: 14
							} })]
						}), /* @__PURE__ */ jsxs("button", {
							onClick: onOpenCounselor,
							style: {
								backgroundColor: "rgba(255, 255, 255, 0.15)",
								color: "#ffffff",
								fontWeight: 600,
								fontSize: "0.94rem",
								padding: "0.75rem 1.6rem",
								borderRadius: "10px",
								border: "1px solid rgba(255, 255, 255, 0.3)",
								cursor: "pointer",
								display: "inline-flex",
								alignItems: "center",
								gap: "6px"
							},
							children: [/* @__PURE__ */ jsx(MessageSquare, { style: {
								width: 16,
								height: 16
							} }), /* @__PURE__ */ jsx("span", { children: "WhatsApp Admissions" })]
						})]
					})
				]
			})
		]
	});
}
// src/data/projectsData.js
const projectsData = [
	{
		id: "medscan-ai",
		category: "healthtech",
		badge: "HealthTech & Computer Vision",
		deployedTag: "Deployed to 12 Partner Clinics",
		title: "Automated Med-Scan AI",
		description: "Multi-modal diagnostic triage assistant classifying MRI and CT anomalies with 97.4% accuracy, generating instant doctor consultation summaries in real-time with automated zero-knowledge patient obfuscation.",
		latency: "Latency: 286ms",
		accuracy: "97.4% Accuracy",
		stack: [
			"PyTorch 2.2",
			"FastAPI",
			"AWS EC2 NVidia",
			"PostgreSQL"
		],
		team: "Anjan K. (Lead) & Swetha M. (Apprentice Cohort '24)",
		stagingUrl: "v1.globally-medscan.corp",
		pipelineSteps: [
			{
				step: "01",
				label: "DICOM Ingest",
				desc: "Secure cloud hospital PACS pipeline"
			},
			{
				step: "02",
				label: "PyTorch ResNet + ViT",
				desc: "12.4K Slices / sec GPU inference"
			},
			{
				step: "03",
				label: "FastAPI Sync Layer",
				desc: "FHIR compliant sub-second sync"
			},
			{
				step: "04",
				label: "Doctor EMR Hookup",
				desc: "Live authenticated webhook alert"
			}
		]
	},
	{
		id: "fraud-shield",
		category: "fintech",
		badge: "FinTech & Distributed Systems",
		deployedTag: "50k events/sec",
		title: "Agentic Fraud Shield",
		description: "Real-time transaction anomaly scanner built on Kafka streaming architectures with autonomous LangGraph agents, evaluating suspicious micro-payments in under 10ms.",
		latency: "Latency: < 8.4ms",
		throughput: "50,000 Events / Sec Throughput",
		stack: [
			"Apache Kafka",
			"FastAPI",
			"Redis Cluster",
			"LangGraph"
		],
		telemetry: "Real-time Telemetry: Ready",
		metrics: [
			{
				label: "Throughput",
				value: "48,200 rps",
				target: "50k Cap"
			},
			{
				label: "P99 Latency",
				value: "6.2ms",
				target: "< 10ms SLA"
			},
			{
				label: "Anomaly F1-Score",
				value: "99.4%",
				target: "> 98%"
			}
		]
	},
	{
		id: "upsc-copilot",
		category: "autonomous",
		badge: "GovTech & EdTech",
		deployedTag: "40k Active Aspirants",
		title: "UPSC & Exam Prep Copilot",
		description: "Context-aware retrieval system with hybrid vector + lexical search, synthesizing 15 years of civil service PYQs with citation tracking and anti-hallucination guardrails.",
		accuracy: "99.1% Citation Accuracy",
		stack: [
			"Next.js 15",
			"Qdrant Vector DB",
			"Llama-Index",
			"Python 3.12"
		],
		benchmarks: [
			{
				label: "Constitutional Articles (Art 140-165)",
				recall: "99.1% Recall",
				status: "optimal"
			},
			{
				label: "Monetary Policy Committee Guidelines",
				recall: "95.8% Recall",
				status: "optimal"
			},
			{
				label: "Supreme Court Landmark Rulings",
				recall: "97.2% Recall",
				status: "optimal"
			}
		]
	},
	{
		id: "devops-swarm",
		category: "autonomous",
		badge: "Cloud Infrastructure & LLMOps",
		deployedTag: "Autonomous Swarm Mode",
		title: "Autonomous DevOps Agent Swarm",
		description: "Multi-agent system that ingests GitHub PRs, automatically provisions isolated staging containers, executes comprehensive static security audits, and synthesizes dynamic regression test suites with zero manual oversight.",
		stack: [
			"Docker Engine",
			"Kubernetes Operator",
			"LangGraph",
			"Claude 3.5 Sonnet API"
		],
		logs: [
			"[07:11:02] $ karka-swarm ingest --pr=1824 --repo=internal/gateway",
			"> Agent 01 [Auditor]: SAST scan complete. 0 critical vulnerabilities found.",
			"> Agent 02 [Tester]: Ephemeral staging deployed at https://pr-1824.karka.sh",
			"> Agent 03 [Creator]: e2e-ai-test-generator: 4/4 suites passed (347ms)",
			">> Ready to Merge. Automated QA stamp appended to GitHub PR."
		]
	}
];
const agencyPhases = [
	{
		number: "PHASE 01",
		title: "2-Week Agile Sprints",
		description: "Daily async standups, Jira ticket estimations, story point planning, and solid milestone retrospectives.",
		action: "Sprint methodology →"
	},
	{
		number: "PHASE 02",
		title: "Staff PR Reviews",
		description: "Every PR is scrutinized by Principal Architects from Tier-1 tech firms. Linters, test coverage, and O(n) limits enforced.",
		action: "No blind merges →"
	},
	{
		number: "PHASE 03",
		title: "Project Stipends",
		description: "When student-built systems deploy to paying clinic or enterprise partners, apprentices receive performance stipends.",
		action: "Real revenue share →"
	},
	{
		number: "PHASE 04",
		title: "Proof of Work Dossier",
		description: "Graduate with verified Git history, deployed microservices, load-testing certificates, and client reference letters.",
		action: "Irrefutable credential →"
	}
];
// src/pages/ProductionLabPage.jsx
function ProductionLabPage({ onOpenAssessment, onOpenCounselor }) {
	const [activeFilter, setActiveFilter] = useState("all");
	const filterMap = {
		all: "All Architecture",
		healthtech: "HealthTech",
		fintech: "Distributed FinTech",
		autonomous: "Autonomous Ops"
	};
	const filteredProjects = activeFilter === "all" ? projectsData : projectsData.filter((p) => p.category === activeFilter);
	return /* @__PURE__ */ jsxs("div", {
		style: {
			maxWidth: "1280px",
			margin: "0 auto",
			padding: "3.5rem 1.5rem"
		},
		children: [
			/* @__PURE__ */ jsxs("div", {
				style: {
					textAlign: "center",
					marginBottom: "3.5rem"
				},
				children: [
					/* @__PURE__ */ jsx("span", {
						style: {
							fontSize: "0.74rem",
							fontWeight: 800,
							textTransform: "uppercase",
							letterSpacing: "0.06em",
							color: "#2563eb",
							background: "#eff6ff",
							border: "1px solid #bfdbfe",
							padding: "5px 14px",
							borderRadius: "9999px",
							display: "inline-block",
							marginBottom: "1rem"
						},
						children: "PRODUCTION LAB APPRENTICESHIP"
					}),
					/* @__PURE__ */ jsxs("h1", {
						style: {
							fontSize: "clamp(2.1rem, 4.5vw, 3.4rem)",
							fontWeight: 800,
							color: "#0f172a",
							letterSpacing: "-0.02em",
							lineHeight: 1.2
						},
						children: [
							"Real Production Code. ",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								style: {
									background: "linear-gradient(135deg, #2563eb 0%, #0284c7 100%)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent"
								},
								children: "Real Scale."
							}),
							" ",
							"Zero Toy Projects."
						]
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: "#64748b",
							fontSize: "1.05rem",
							maxWidth: "720px",
							margin: "12px auto 2.5rem",
							lineHeight: 1.6
						},
						children: "At Karka, students do not build simple to-do lists or generic Netflix clones. They build multi-tenant AI systems, high-concurrency microservices, and client-commissioned tools running in active enterprise production."
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
							gap: "1.25rem",
							background: "#ffffff",
							borderRadius: "20px",
							border: "1px solid #e2e8f0",
							boxShadow: "0 10px 30px -5px rgba(15, 23, 42, 0.05)",
							padding: "2rem 1.5rem"
						},
						children: [
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "clamp(2rem, 3.5vw, 2.7rem)",
									fontWeight: 800,
									color: "#2563eb",
									lineHeight: 1
								},
								children: "12+"
							}), /* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "0.78rem",
									fontWeight: 800,
									color: "#0f172a",
									textTransform: "uppercase",
									marginTop: "6px"
								},
								children: "LIVE CLINICAL DEPLOYMENTS"
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "clamp(2rem, 3.5vw, 2.7rem)",
									fontWeight: 800,
									color: "#059669",
									lineHeight: 1
								},
								children: "50,000"
							}), /* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "0.78rem",
									fontWeight: 800,
									color: "#0f172a",
									textTransform: "uppercase",
									marginTop: "6px"
								},
								children: "EVENTS / SEC THROUGHPUT"
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "clamp(2rem, 3.5vw, 2.7rem)",
									fontWeight: 800,
									color: "#ea580c",
									lineHeight: 1
								},
								children: "40,000+"
							}), /* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "0.78rem",
									fontWeight: 800,
									color: "#0f172a",
									textTransform: "uppercase",
									marginTop: "6px"
								},
								children: "ACTIVE ENTERPRISE USERS"
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "clamp(2rem, 3.5vw, 2.7rem)",
									fontWeight: 800,
									color: "#0f172a",
									lineHeight: 1
								},
								children: "100%"
							}), /* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "0.78rem",
									fontWeight: 800,
									color: "#0f172a",
									textTransform: "uppercase",
									marginTop: "6px"
								},
								children: "PRODUCTION TESTING"
							})] })
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				style: { marginBottom: "5.5rem" },
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexWrap: "wrap",
						gap: "1rem",
						marginBottom: "2.5rem"
					},
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
						style: {
							fontSize: "0.72rem",
							fontWeight: 800,
							color: "#2563eb",
							textTransform: "uppercase"
						},
						children: "FEATURED DEPLOYMENTS"
					}), /* @__PURE__ */ jsx("h2", {
						style: {
							fontSize: "1.75rem",
							fontWeight: 800,
							color: "#0f172a",
							marginTop: "4px"
						},
						children: "Client & Enterprise Grade Builds"
					})] }), /* @__PURE__ */ jsx("div", {
						style: {
							display: "flex",
							gap: "6px",
							background: "#f1f5f9",
							padding: "4px",
							borderRadius: "9999px"
						},
						children: Object.entries(filterMap).map(([key, label]) => {
							const isActive = activeFilter === key;
							return /* @__PURE__ */ jsx("button", {
								onClick: () => setActiveFilter(key),
								style: {
									background: isActive ? "#2563eb" : "transparent",
									color: isActive ? "#ffffff" : "#475569",
									border: "none",
									padding: "6px 14px",
									borderRadius: "9999px",
									fontSize: "0.8rem",
									fontWeight: isActive ? 700 : 500,
									cursor: "pointer",
									transition: "all 0.14s ease"
								},
								children: label
							}, key);
						})
					})]
				}), /* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
						gap: "2rem"
					},
					children: filteredProjects.map((p) => /* @__PURE__ */ jsxs("div", {
						className: "karka-card",
						style: {
							padding: "2.25rem",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between"
						},
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: "12px"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.75rem",
										fontWeight: 700,
										color: "#2563eb"
									},
									children: p.badge
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.7rem",
										fontWeight: 700,
										color: "#059669",
										background: "#ecfdf5",
										padding: "3px 8px",
										borderRadius: "9999px",
										border: "1px solid #a7f3d0"
									},
									children: p.deployedTag
								})]
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: "1.45rem",
									fontWeight: 800,
									color: "#0f172a",
									marginBottom: "8px"
								},
								children: p.title
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									color: "#475569",
									fontSize: "0.88rem",
									lineHeight: 1.6,
									marginBottom: "1.5rem"
								},
								children: p.description
							}),
							p.pipelineSteps && /* @__PURE__ */ jsxs("div", {
								style: {
									background: "#f8fafc",
									border: "1px solid #e2e8f0",
									borderRadius: "12px",
									padding: "1.25rem",
									marginBottom: "1.5rem"
								},
								children: [/* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										justifyContent: "space-between",
										marginBottom: "10px"
									},
									children: [/* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "0.72rem",
											fontWeight: 700,
											color: "#64748b",
											textTransform: "uppercase"
										},
										children: "VISION PIPELINE TOPOLOGY"
									}), /* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "0.72rem",
											fontWeight: 700,
											color: "#059669"
										},
										children: p.latency
									})]
								}), /* @__PURE__ */ jsx("div", {
									style: {
										display: "flex",
										flexDirection: "column",
										gap: "6px"
									},
									children: p.pipelineSteps.map((s, idx) => /* @__PURE__ */ jsxs("div", {
										style: {
											display: "flex",
											alignItems: "center",
											gap: "10px",
											background: "#ffffff",
											padding: "6px 10px",
											borderRadius: "6px",
											border: "1px solid #e2e8f0",
											fontSize: "0.76rem"
										},
										children: [
											/* @__PURE__ */ jsx("span", {
												style: {
													fontWeight: 800,
													color: "#2563eb"
												},
												children: s.step
											}),
											/* @__PURE__ */ jsx("strong", {
												style: { color: "#0f172a" },
												children: s.label
											}),
											/* @__PURE__ */ jsx("span", {
												style: {
													color: "#64748b",
													marginLeft: "auto"
												},
												children: s.desc
											})
										]
									}, idx))
								})]
							}),
							p.metrics && /* @__PURE__ */ jsxs("div", {
								style: {
									background: "#f8fafc",
									border: "1px solid #e2e8f0",
									borderRadius: "12px",
									padding: "1.25rem",
									marginBottom: "1.5rem"
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "0.72rem",
										fontWeight: 700,
										color: "#64748b",
										textTransform: "uppercase",
										marginBottom: "10px"
									},
									children: "STREAMING BENCHMARKS & SLA"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										display: "grid",
										gridTemplateColumns: "repeat(3, 1fr)",
										gap: "8px"
									},
									children: p.metrics.map((m, idx) => /* @__PURE__ */ jsxs("div", {
										style: {
											background: "#ffffff",
											padding: "8px",
											borderRadius: "6px",
											border: "1px solid #e2e8f0"
										},
										children: [
											/* @__PURE__ */ jsx("span", {
												style: {
													fontSize: "0.68rem",
													color: "#64748b"
												},
												children: m.label
											}),
											/* @__PURE__ */ jsx("div", {
												style: {
													fontSize: "0.98rem",
													fontWeight: 800,
													color: "#ea580c"
												},
												children: m.value
											}),
											/* @__PURE__ */ jsx("span", {
												style: {
													fontSize: "0.65rem",
													color: "#059669"
												},
												children: m.target
											})
										]
									}, idx))
								})]
							}),
							p.benchmarks && /* @__PURE__ */ jsxs("div", {
								style: {
									background: "#f8fafc",
									border: "1px solid #e2e8f0",
									borderRadius: "12px",
									padding: "1.25rem",
									marginBottom: "1.5rem"
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "0.72rem",
										fontWeight: 700,
										color: "#64748b",
										textTransform: "uppercase",
										marginBottom: "8px"
									},
									children: "HYBRID RAG RETRIEVAL (BM25 + QDRANT)"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										display: "flex",
										flexDirection: "column",
										gap: "6px"
									},
									children: p.benchmarks.map((b, idx) => /* @__PURE__ */ jsxs("div", {
										style: {
											display: "flex",
											justifyContent: "space-between",
											fontSize: "0.76rem",
											padding: "4px 0",
											borderBottom: "1px solid #f1f5f9"
										},
										children: [/* @__PURE__ */ jsx("span", {
											style: { color: "#334155" },
											children: b.label
										}), /* @__PURE__ */ jsx("strong", {
											style: { color: "#059669" },
											children: b.recall
										})]
									}, idx))
								})]
							}),
							p.logs && /* @__PURE__ */ jsx("div", {
								style: {
									background: "#0a0f1d",
									borderRadius: "12px",
									padding: "1rem",
									marginBottom: "1.5rem",
									fontFamily: "var(--font-mono)",
									fontSize: "0.72rem",
									color: "#94a3b8",
									lineHeight: 1.6,
									border: "1px solid #1e293b"
								},
								children: p.logs.map((log, idx) => /* @__PURE__ */ jsx("div", {
									style: { color: log.includes("Ready") ? "#34d399" : log.includes("Agent") ? "#38bdf8" : "#e2e8f0" },
									children: log
								}, idx))
							})
						] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							style: {
								display: "flex",
								flexWrap: "wrap",
								gap: "6px",
								marginBottom: "1.25rem"
							},
							children: p.stack.map((t, idx) => /* @__PURE__ */ jsx("span", {
								style: {
									fontSize: "0.72rem",
									padding: "3px 8px",
									background: "#f1f5f9",
									borderRadius: "6px",
									color: "#334155",
									fontWeight: 600
								},
								children: t
							}, idx))
						}), /* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								paddingTop: "10px",
								borderTop: "1px solid #f1f5f9"
							},
							children: [/* @__PURE__ */ jsx("span", {
								style: {
									fontSize: "0.74rem",
									color: "#64748b"
								},
								children: p.team || "Production Lab Team"
							}), /* @__PURE__ */ jsx("button", {
								onClick: () => onOpenAssessment(),
								style: {
									background: "none",
									border: "none",
									color: "#2563eb",
									fontWeight: 700,
									fontSize: "0.82rem",
									cursor: "pointer"
								},
								children: "Join Build Pod →"
							})]
						})] })]
					}, p.id))
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				style: { marginBottom: "5.5rem" },
				children: /* @__PURE__ */ jsxs("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
						gap: "1.5rem"
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "karka-card",
							style: { overflow: "hidden" },
							children: [/* @__PURE__ */ jsx("img", {
								src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
								alt: "Architecture review",
								style: {
									width: "100%",
									height: "180px",
									objectFit: "cover"
								}
							}), /* @__PURE__ */ jsxs("div", {
								style: { padding: "1.25rem" },
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.7rem",
										fontWeight: 700,
										color: "#2563eb"
									},
									children: "TEAM PODS"
								}), /* @__PURE__ */ jsx("h4", {
									style: {
										fontSize: "0.96rem",
										fontWeight: 800,
										color: "#0f172a",
										marginTop: "2px"
									},
									children: "Sprint zero architecture review with staff engineers"
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "karka-card",
							style: { overflow: "hidden" },
							children: [/* @__PURE__ */ jsx("img", {
								src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80",
								alt: "Zero-downtime releases",
								style: {
									width: "100%",
									height: "180px",
									objectFit: "cover"
								}
							}), /* @__PURE__ */ jsxs("div", {
								style: { padding: "1.25rem" },
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.7rem",
										fontWeight: 700,
										color: "#ea580c"
									},
									children: "PRODUCTION RELEASES"
								}), /* @__PURE__ */ jsx("h4", {
									style: {
										fontSize: "0.96rem",
										fontWeight: 800,
										color: "#0f172a",
										marginTop: "2px"
									},
									children: "Zero-downtime releases pushed to AWS and Cloudflare"
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "karka-card",
							style: { overflow: "hidden" },
							children: [/* @__PURE__ */ jsx("img", {
								src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80",
								alt: "Enterprise delivery",
								style: {
									width: "100%",
									height: "180px",
									objectFit: "cover"
								}
							}), /* @__PURE__ */ jsxs("div", {
								style: { padding: "1.25rem" },
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.7rem",
										fontWeight: 700,
										color: "#059669"
									},
									children: "CLIENT DEMO"
								}), /* @__PURE__ */ jsx("h4", {
									style: {
										fontSize: "0.96rem",
										fontWeight: 800,
										color: "#0f172a",
										marginTop: "2px"
									},
									children: "Live product delivery directly to enterprise partners"
								})]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				style: { marginBottom: "5.5rem" },
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						textAlign: "center",
						marginBottom: "3rem"
					},
					children: [
						/* @__PURE__ */ jsx("span", {
							style: {
								fontSize: "0.72rem",
								fontWeight: 700,
								color: "#ea580c",
								background: "#fff7ed",
								padding: "3px 10px",
								borderRadius: "9999px"
							},
							children: "HOW KARKA OPERATES DIFFERENTLY"
						}),
						/* @__PURE__ */ jsx("h2", {
							style: {
								fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)",
								fontWeight: 800,
								color: "#0f172a",
								marginTop: "8px"
							},
							children: "Not a Classroom. An Engineering Agency."
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								color: "#64748b",
								fontSize: "0.94rem",
								maxWidth: "640px",
								margin: "4px auto 0"
							},
							children: "Traditional bootcamps simulate homework. Karka runs a commercial engineering division. You operate as an Associate Software Engineer from day 45 of your training."
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
						gap: "1.5rem"
					},
					children: agencyPhases.map((phase, idx) => /* @__PURE__ */ jsxs("div", {
						className: "karka-card",
						style: {
							padding: "1.75rem",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between"
						},
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("span", {
								style: {
									fontSize: "0.72rem",
									fontWeight: 800,
									color: "#2563eb",
									background: "#eff6ff",
									padding: "2px 8px",
									borderRadius: "4px"
								},
								children: phase.number
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: "1.15rem",
									fontWeight: 800,
									color: "#0f172a",
									margin: "8px 0 6px"
								},
								children: phase.title
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "0.84rem",
									color: "#64748b",
									lineHeight: 1.6
								},
								children: phase.description
							})
						] }), /* @__PURE__ */ jsx("div", {
							style: {
								paddingTop: "1rem",
								marginTop: "1rem",
								borderTop: "1px solid #f1f5f9",
								fontSize: "0.82rem",
								color: "#2563eb",
								fontWeight: 700
							},
							children: phase.action
						})]
					}, idx))
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				style: {
					background: "#ffffff",
					borderRadius: "16px",
					border: "1px solid #e2e8f0",
					padding: "1.25rem 2rem",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					flexWrap: "wrap",
					gap: "1rem",
					boxShadow: "0 4px 20px -2px rgba(15, 23, 42, 0.05)",
					marginBottom: "5.5rem"
				},
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						alignItems: "center",
						gap: "12px"
					},
					children: [/* @__PURE__ */ jsx("div", {
						style: {
							width: 10,
							height: 10,
							borderRadius: "50%",
							backgroundColor: "#10b981"
						},
						className: "animate-live-dot"
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						style: {
							fontSize: "0.88rem",
							fontWeight: 700,
							color: "#0f172a"
						},
						children: "Live Apprenticeship Telemetry"
					}), /* @__PURE__ */ jsx("div", {
						style: {
							fontSize: "0.78rem",
							color: "#64748b"
						},
						children: "Over 1,420 merged commits this month across 8 client commission repos."
					})] })]
				}), /* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						alignItems: "center",
						gap: "1.5rem",
						fontSize: "0.78rem",
						fontWeight: 600
					},
					children: [/* @__PURE__ */ jsxs("span", {
						style: {
							color: "#059669",
							display: "flex",
							alignItems: "center",
							gap: "4px"
						},
						children: [/* @__PURE__ */ jsx(CheckCircle, { style: {
							width: 14,
							height: 14
						} }), "99.2% Test Suite Pass"]
					}), /* @__PURE__ */ jsxs("span", {
						style: {
							color: "#2563eb",
							display: "flex",
							alignItems: "center",
							gap: "4px"
						},
						children: [/* @__PURE__ */ jsx(Cpu, { style: {
							width: 14,
							height: 14
						} }), "Kubernetes Staging Healthy"]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				style: {
					background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #c2410c 100%)",
					borderRadius: "24px",
					padding: "3.5rem 2rem",
					textAlign: "center",
					color: "#ffffff",
					boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.4)"
				},
				children: [
					/* @__PURE__ */ jsx("span", {
						style: {
							fontSize: "0.74rem",
							fontWeight: 800,
							background: "rgba(255, 255, 255, 0.15)",
							padding: "4px 12px",
							borderRadius: "9999px",
							display: "inline-block",
							marginBottom: "10px"
						},
						children: "ADMISSIONS FOR NEXT COHORT"
					}),
					/* @__PURE__ */ jsx("h2", {
						style: {
							fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)",
							fontWeight: 800,
							marginBottom: "10px"
						},
						children: "Ready to Build Real Production Systems?"
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: "#f1f5f9",
							fontSize: "1rem",
							maxWidth: "620px",
							margin: "0 auto 2rem",
							lineHeight: 1.6
						},
						children: "Stop copying tutorials. Join Karka's Production Lab, ship code to active clinical & FinTech networks, and pay zero tuition upfront until you secure your engineering role."
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							justifyContent: "center",
							gap: "1rem",
							flexWrap: "wrap"
						},
						children: [/* @__PURE__ */ jsxs("button", {
							onClick: () => onOpenAssessment(),
							style: {
								backgroundColor: "#0f172a",
								color: "#ffffff",
								fontWeight: 700,
								fontSize: "0.94rem",
								padding: "0.75rem 1.6rem",
								borderRadius: "10px",
								border: "none",
								cursor: "pointer",
								display: "inline-flex",
								alignItems: "center",
								gap: "6px"
							},
							children: [/* @__PURE__ */ jsx("span", { children: "Apply to Join Production Lab" }), /* @__PURE__ */ jsx(ArrowRight, { style: {
								width: 14,
								height: 14
							} })]
						}), /* @__PURE__ */ jsxs("button", {
							onClick: onOpenCounselor,
							style: {
								backgroundColor: "rgba(255, 255, 255, 0.2)",
								color: "#ffffff",
								fontWeight: 600,
								fontSize: "0.94rem",
								padding: "0.75rem 1.6rem",
								borderRadius: "10px",
								border: "1px solid rgba(255, 255, 255, 0.35)",
								cursor: "pointer",
								display: "inline-flex",
								alignItems: "center",
								gap: "6px"
							},
							children: [/* @__PURE__ */ jsx(Code, { style: {
								width: 16,
								height: 16
							} }), /* @__PURE__ */ jsx("span", { children: "Review Student GitHub Repositories" })]
						})]
					})
				]
			})
		]
	});
}
// src/components/AssessmentModal.jsx
function AssessmentModal({ isOpen, onClose, selectedTrack = "AI Full-Stack Engineering" }) {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		whatsapp: "",
		track: selectedTrack,
		graduationYear: "2025",
		experienceLevel: "Fresher / Final Year",
		githubProfile: ""
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [result, setResult] = useState(null);
	if (!isOpen) return null;
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			const response = await MockAPI.submitAssessment(formData);
			setResult(response);
		} catch (err) {
			setError(err.message || "Submission failed. Please check your details.");
		} finally {
			setLoading(false);
		}
	};
	const handleReset = () => {
		setResult(null);
		setFormData({
			fullName: "",
			email: "",
			whatsapp: "",
			track: selectedTrack,
			graduationYear: "2025",
			experienceLevel: "Fresher / Final Year",
			githubProfile: ""
		});
		onClose();
	};
	return /* @__PURE__ */ jsx("div", {
		style: {
			position: "fixed",
			inset: 0,
			zIndex: 100,
			backgroundColor: "rgba(15, 23, 42, 0.65)",
			backdropFilter: "blur(8px)",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			padding: "1rem"
		},
		className: "animate-fade-in",
		onClick: onClose,
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				backgroundColor: "#ffffff",
				borderRadius: "20px",
				width: "100%",
				maxWidth: "560px",
				maxHeight: "90vh",
				overflowY: "auto",
				boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
				position: "relative",
				border: "1px solid #e2e8f0"
			},
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ jsx("button", {
				onClick: onClose,
				style: {
					position: "absolute",
					top: "18px",
					right: "18px",
					background: "#f1f5f9",
					border: "none",
					borderRadius: "50%",
					width: "32px",
					height: "32px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					cursor: "pointer",
					color: "#64748b",
					zIndex: 10
				},
				children: /* @__PURE__ */ jsx(X, { style: {
					width: 18,
					height: 18
				} })
			}), !result ? /* @__PURE__ */ jsxs("div", {
				style: { padding: "2rem" },
				children: [
					/* @__PURE__ */ jsxs("div", {
						style: { marginBottom: "1.5rem" },
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "inline-flex",
									alignItems: "center",
									gap: "6px",
									backgroundColor: "#eff6ff",
									border: "1px solid #bfdbfe",
									color: "#1d4ed8",
									padding: "4px 10px",
									borderRadius: "9999px",
									fontSize: "0.74rem",
									fontWeight: 700,
									marginBottom: "10px"
								},
								children: [/* @__PURE__ */ jsx(Sparkles, { style: {
									width: 14,
									height: 14
								} }), /* @__PURE__ */ jsx("span", { children: "ADMISSIONS 2026 • ZERO UPFRONT TUITION" })]
							}),
							/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.5rem",
									fontWeight: 800,
									color: "#0f172a",
									letterSpacing: "-0.02em"
								},
								children: "Apply for 90-Minute Technical Assessment"
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "0.86rem",
									color: "#64748b",
									marginTop: "6px"
								},
								children: "Join India's most selective AI school. No upfront payment. 100% Pay After Placement (₹5+ LPA)."
							})
						]
					}),
					error && /* @__PURE__ */ jsx("div", {
						style: {
							backgroundColor: "#fef2f2",
							border: "1px solid #fecaca",
							color: "#dc2626",
							padding: "10px 14px",
							borderRadius: "8px",
							fontSize: "0.84rem",
							marginBottom: "1.25rem"
						},
						children: error
					}),
					/* @__PURE__ */ jsxs("form", {
						onSubmit: handleSubmit,
						style: {
							display: "flex",
							flexDirection: "column",
							gap: "1rem"
						},
						children: [
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								style: {
									display: "block",
									fontSize: "0.82rem",
									fontWeight: 600,
									color: "#334155",
									marginBottom: "6px"
								},
								children: "Full Legal Name *"
							}), /* @__PURE__ */ jsx("input", {
								type: "text",
								required: true,
								placeholder: "e.g. Arun Kumar",
								value: formData.fullName,
								onChange: (e) => setFormData({
									...formData,
									fullName: e.target.value
								}),
								style: {
									width: "100%",
									padding: "0.65rem 0.85rem",
									borderRadius: "8px",
									border: "1px solid #cbd5e1",
									fontSize: "0.9rem",
									outline: "none"
								},
								onFocus: (e) => e.target.style.borderColor = "#2563eb",
								onBlur: (e) => e.target.style.borderColor = "#cbd5e1"
							})] }),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "grid",
									gridTemplateColumns: "1fr 1fr",
									gap: "1rem"
								},
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									style: {
										display: "block",
										fontSize: "0.82rem",
										fontWeight: 600,
										color: "#334155",
										marginBottom: "6px"
									},
									children: "Email Address *"
								}), /* @__PURE__ */ jsx("input", {
									type: "email",
									required: true,
									placeholder: "arun@domain.com",
									value: formData.email,
									onChange: (e) => setFormData({
										...formData,
										email: e.target.value
									}),
									style: {
										width: "100%",
										padding: "0.65rem 0.85rem",
										borderRadius: "8px",
										border: "1px solid #cbd5e1",
										fontSize: "0.9rem",
										outline: "none"
									},
									onFocus: (e) => e.target.style.borderColor = "#2563eb",
									onBlur: (e) => e.target.style.borderColor = "#cbd5e1"
								})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									style: {
										display: "block",
										fontSize: "0.82rem",
										fontWeight: 600,
										color: "#334155",
										marginBottom: "6px"
									},
									children: "WhatsApp Number *"
								}), /* @__PURE__ */ jsx("input", {
									type: "tel",
									required: true,
									placeholder: "+91 98765 43210",
									value: formData.whatsapp,
									onChange: (e) => setFormData({
										...formData,
										whatsapp: e.target.value
									}),
									style: {
										width: "100%",
										padding: "0.65rem 0.85rem",
										borderRadius: "8px",
										border: "1px solid #cbd5e1",
										fontSize: "0.9rem",
										outline: "none"
									},
									onFocus: (e) => e.target.style.borderColor = "#2563eb",
									onBlur: (e) => e.target.style.borderColor = "#cbd5e1"
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								style: {
									display: "block",
									fontSize: "0.82rem",
									fontWeight: 600,
									color: "#334155",
									marginBottom: "6px"
								},
								children: "Target Engineering Pathway *"
							}), /* @__PURE__ */ jsxs("select", {
								value: formData.track,
								onChange: (e) => setFormData({
									...formData,
									track: e.target.value
								}),
								style: {
									width: "100%",
									padding: "0.65rem 0.85rem",
									borderRadius: "8px",
									border: "1px solid #cbd5e1",
									fontSize: "0.9rem",
									backgroundColor: "#ffffff",
									outline: "none"
								},
								children: [
									/* @__PURE__ */ jsx("option", {
										value: "AI Full-Stack Engineering",
										children: "AI Full-Stack Engineering (24 Weeks • Most Popular)"
									}),
									/* @__PURE__ */ jsx("option", {
										value: "Generative AI & LLM Systems Architect",
										children: "Generative AI & LLM Systems Architect (16 Weeks • Advanced)"
									}),
									/* @__PURE__ */ jsx("option", {
										value: "Data Engineering & Applied MLOps",
										children: "Data Engineering & Applied MLOps (20 Weeks • Scalability)"
									})
								]
							})] }),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "grid",
									gridTemplateColumns: "1fr 1fr",
									gap: "1rem"
								},
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									style: {
										display: "block",
										fontSize: "0.82rem",
										fontWeight: 600,
										color: "#334155",
										marginBottom: "6px"
									},
									children: "Graduation Year"
								}), /* @__PURE__ */ jsxs("select", {
									value: formData.graduationYear,
									onChange: (e) => setFormData({
										...formData,
										graduationYear: e.target.value
									}),
									style: {
										width: "100%",
										padding: "0.65rem 0.85rem",
										borderRadius: "8px",
										border: "1px solid #cbd5e1",
										fontSize: "0.9rem",
										backgroundColor: "#ffffff"
									},
									children: [
										/* @__PURE__ */ jsx("option", {
											value: "2026",
											children: "2026 (Final Year)"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "2025",
											children: "2025 (Fresh Grad)"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "2024",
											children: "2024"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "2023",
											children: "2023"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "2022 or earlier",
											children: "2022 or earlier"
										})
									]
								})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									style: {
										display: "block",
										fontSize: "0.82rem",
										fontWeight: 600,
										color: "#334155",
										marginBottom: "6px"
									},
									children: "GitHub or LinkedIn Profile"
								}), /* @__PURE__ */ jsx("input", {
									type: "url",
									placeholder: "https://github.com/username",
									value: formData.githubProfile,
									onChange: (e) => setFormData({
										...formData,
										githubProfile: e.target.value
									}),
									style: {
										width: "100%",
										padding: "0.65rem 0.85rem",
										borderRadius: "8px",
										border: "1px solid #cbd5e1",
										fontSize: "0.9rem",
										outline: "none"
									}
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									backgroundColor: "#f8fafc",
									padding: "12px",
									borderRadius: "8px",
									border: "1px solid #e2e8f0",
									fontSize: "0.78rem",
									color: "#64748b",
									display: "flex",
									alignItems: "center",
									gap: "8px"
								},
								children: [/* @__PURE__ */ jsx(ShieldCheck, { style: {
									width: 18,
									height: 18,
									color: "#059669",
									flexShrink: 0
								} }), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("strong", { children: "100% Privacy & Legal PAP Protection:" }), " No credit cards, no upfront security deposit, and no loan liabilities."] })]
							}),
							/* @__PURE__ */ jsx("button", {
								type: "submit",
								disabled: loading,
								className: "btn-primary",
								style: {
									width: "100%",
									padding: "0.85rem",
									fontSize: "0.95rem",
									marginTop: "6px",
									opacity: loading ? .7 : 1,
									cursor: loading ? "not-allowed" : "pointer"
								},
								children: loading ? "Dispatching Assessment via API..." : "Submit Application & Get Test Link →"
							})
						]
					})
				]
			}) : /* @__PURE__ */ jsxs("div", {
				style: {
					padding: "2.5rem 2rem",
					textAlign: "center"
				},
				children: [
					/* @__PURE__ */ jsx("div", {
						style: {
							width: "64px",
							height: "64px",
							borderRadius: "50%",
							backgroundColor: "#ecfdf5",
							border: "2px solid #a7f3d0",
							color: "#059669",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							margin: "0 auto 1.25rem"
						},
						children: /* @__PURE__ */ jsx(CheckCircle, { style: {
							width: 36,
							height: 36
						} })
					}),
					/* @__PURE__ */ jsx("span", {
						style: {
							background: "#eff6ff",
							color: "#1d4ed8",
							fontWeight: 700,
							fontSize: "0.76rem",
							padding: "4px 12px",
							borderRadius: "9999px",
							display: "inline-block",
							marginBottom: "10px"
						},
						children: "APPLICATION REGISTERED (HTTP 201 CREATED)"
					}),
					/* @__PURE__ */ jsxs("h2", {
						style: {
							fontSize: "1.45rem",
							fontWeight: 800,
							color: "#0f172a"
						},
						children: [
							"Congratulations, ",
							result.applicantName,
							"!"
						]
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: "#64748b",
							fontSize: "0.88rem",
							marginTop: "6px",
							maxWidth: "420px",
							margin: "6px auto 0"
						},
						children: "Your application has been received and verified by our automated admissions API."
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							background: "#f8fafc",
							border: "1px solid #e2e8f0",
							borderRadius: "12px",
							padding: "1.25rem",
							textAlign: "left",
							margin: "1.5rem 0",
							fontSize: "0.84rem"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									paddingBottom: "8px",
									borderBottom: "1px solid #e2e8f0"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: { color: "#64748b" },
									children: "Application ID:"
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontWeight: 700,
										color: "#2563eb",
										fontFamily: "var(--font-mono)"
									},
									children: result.applicationId
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									padding: "8px 0",
									borderBottom: "1px solid #e2e8f0"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: { color: "#64748b" },
									children: "Track:"
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontWeight: 600,
										color: "#0f172a"
									},
									children: result.trackApplied
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									padding: "8px 0",
									borderBottom: "1px solid #e2e8f0"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: { color: "#64748b" },
									children: "Format:"
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontWeight: 500,
										color: "#334155"
									},
									children: "90-Min Coding Challenge"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									paddingTop: "8px"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: { color: "#64748b" },
									children: "Passing Benchmark:"
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontWeight: 700,
										color: "#059669"
									},
									children: "65% Score"
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							gap: "0.75rem",
							justifyContent: "center"
						},
						children: [/* @__PURE__ */ jsx("button", {
							onClick: handleReset,
							className: "btn-secondary",
							style: { flex: 1 },
							children: "Close"
						}), /* @__PURE__ */ jsxs("a", {
							href: result.assessmentDetails.testLink,
							target: "_blank",
							rel: "noreferrer",
							className: "btn-primary",
							style: {
								flex: 1,
								textDecoration: "none"
							},
							children: [/* @__PURE__ */ jsx("span", { children: "Launch Test Sandbox" }), /* @__PURE__ */ jsx(ArrowRight, { style: {
								width: 14,
								height: 14
							} })]
						})]
					})
				]
			})]
		})
	});
}
// src/components/SyllabusModal.jsx
function SyllabusModal({ isOpen, onClose, track, onApply }) {
	if (!isOpen || !track) return null;
	const handleDownload = () => {
		const content = `# ${track.title} — Official Curriculum Syllabus 2026\n\nDuration: ${track.duration} | Level: ${track.level}\nBenchmark CTC: ${track.benchmarkCtc}\nLead Mentor: ${track.mentor}\n\nPrerequisites: ${track.prerequisites}\nCapstones: ${track.capstones}\n\n## Detailed Weekly Modules\n` + track.syllabus.map((m) => `\n### ${m.week}: ${m.title}\n` + m.topics.map((t) => `- ${t}`).join("\n")).join("\n\n") + `\n\n---\nKarka AI Academy — Verified Pay After Placement Engineering School`;
		const blob = new Blob([content], { type: "text/markdown" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `Karka-Curriculum-${track.id}.md`;
		a.click();
		URL.revokeObjectURL(url);
	};
	return /* @__PURE__ */ jsx("div", {
		style: {
			position: "fixed",
			inset: 0,
			zIndex: 100,
			backgroundColor: "rgba(15, 23, 42, 0.65)",
			backdropFilter: "blur(8px)",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			padding: "1rem"
		},
		className: "animate-fade-in",
		onClick: onClose,
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				backgroundColor: "#ffffff",
				borderRadius: "20px",
				width: "100%",
				maxWidth: "680px",
				maxHeight: "88vh",
				overflowY: "auto",
				boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
				position: "relative",
				border: "1px solid #e2e8f0"
			},
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					padding: "1.75rem 2rem 1.25rem",
					borderBottom: "1px solid #e2e8f0",
					position: "sticky",
					top: 0,
					background: "rgba(255, 255, 255, 0.96)",
					backdropFilter: "blur(10px)",
					zIndex: 10,
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-start"
				},
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("span", {
						style: {
							fontSize: "0.74rem",
							fontWeight: 700,
							color: "#2563eb",
							background: "#eff6ff",
							padding: "3px 8px",
							borderRadius: "9999px",
							display: "inline-block",
							marginBottom: "6px"
						},
						children: track.badge
					}),
					/* @__PURE__ */ jsx("h2", {
						style: {
							fontSize: "1.4rem",
							fontWeight: 800,
							color: "#0f172a"
						},
						children: track.title
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "0.82rem",
							color: "#64748b",
							marginTop: "2px"
						},
						children: track.mentor
					})
				] }), /* @__PURE__ */ jsx("button", {
					onClick: onClose,
					style: {
						background: "#f1f5f9",
						border: "none",
						borderRadius: "50%",
						width: "32px",
						height: "32px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						cursor: "pointer",
						color: "#64748b"
					},
					children: /* @__PURE__ */ jsx(X, { style: {
						width: 18,
						height: 18
					} })
				})]
			}), /* @__PURE__ */ jsxs("div", {
				style: { padding: "1.5rem 2rem" },
				children: [
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(3, 1fr)",
							gap: "10px",
							background: "#f8fafc",
							border: "1px solid #e2e8f0",
							borderRadius: "12px",
							padding: "12px",
							marginBottom: "1.5rem"
						},
						children: [
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "0.7rem",
									color: "#64748b",
									textTransform: "uppercase"
								},
								children: "DURATION"
							}), /* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "0.88rem",
									fontWeight: 700,
									color: "#0f172a"
								},
								children: track.duration
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "0.7rem",
									color: "#64748b",
									textTransform: "uppercase"
								},
								children: "BENCHMARK CTC"
							}), /* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "0.88rem",
									fontWeight: 700,
									color: "#2563eb"
								},
								children: track.benchmarkCtc.replace("Benchmark CTC: ", "")
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "0.7rem",
									color: "#64748b",
									textTransform: "uppercase"
								},
								children: "TUITION FEE"
							}), /* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "0.88rem",
									fontWeight: 700,
									color: "#059669"
								},
								children: "₹0 Upfront (PAP)"
							})] })
						]
					}),
					/* @__PURE__ */ jsx("h3", {
						style: {
							fontSize: "1rem",
							fontWeight: 700,
							color: "#0f172a",
							marginBottom: "1rem"
						},
						children: "Comprehensive Syllabus Architecture"
					}),
					/* @__PURE__ */ jsx("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: "1rem"
						},
						children: track.syllabus.map((mod, idx) => /* @__PURE__ */ jsxs("div", {
							style: {
								border: "1px solid #e2e8f0",
								borderRadius: "12px",
								padding: "1rem",
								background: "#ffffff"
							},
							children: [/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: "8px",
									marginBottom: "8px"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										background: "#eff6ff",
										color: "#2563eb",
										fontWeight: 700,
										fontSize: "0.72rem",
										padding: "2px 8px",
										borderRadius: "6px"
									},
									children: mod.week
								}), /* @__PURE__ */ jsx("h4", {
									style: {
										fontSize: "0.92rem",
										fontWeight: 700,
										color: "#1e293b"
									},
									children: mod.title
								})]
							}), /* @__PURE__ */ jsx("ul", {
								style: {
									listStyle: "none",
									paddingLeft: "0",
									display: "flex",
									flexDirection: "column",
									gap: "6px"
								},
								children: mod.topics.map((t, tIdx) => /* @__PURE__ */ jsxs("li", {
									style: {
										fontSize: "0.82rem",
										color: "#475569",
										display: "flex",
										alignItems: "flex-start",
										gap: "8px"
									},
									children: [/* @__PURE__ */ jsx(CheckCircle, { style: {
										width: 14,
										height: 14,
										color: "#10b981",
										flexShrink: 0,
										marginTop: "3px"
									} }), /* @__PURE__ */ jsx("span", { children: t })]
								}, tIdx))
							})]
						}, idx))
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							marginTop: "1.75rem",
							paddingTop: "1.25rem",
							borderTop: "1px solid #e2e8f0",
							display: "flex",
							gap: "1rem",
							justifyContent: "space-between"
						},
						children: [/* @__PURE__ */ jsxs("button", {
							onClick: handleDownload,
							className: "btn-secondary",
							style: {
								display: "flex",
								alignItems: "center",
								gap: "6px"
							},
							children: [/* @__PURE__ */ jsx(Download, { style: {
								width: 14,
								height: 14
							} }), /* @__PURE__ */ jsx("span", { children: "Download Syllabus PDF/MD" })]
						}), /* @__PURE__ */ jsx("button", {
							onClick: () => {
								onClose();
								onApply(track.title);
							},
							className: "btn-primary",
							children: /* @__PURE__ */ jsx("span", { children: "Apply for This Track →" })
						})]
					})
				]
			})]
		})
	});
}
// src/components/CounselorModal.jsx
function CounselorModal({ isOpen, onClose }) {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		slotTime: "Tomorrow at 4:30 PM IST",
		queryTopic: "Pay After Placement terms & eligibility check"
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [result, setResult] = useState(null);
	if (!isOpen) return null;
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			const res = await MockAPI.bookAdvisorCall(formData);
			setResult(res);
		} catch (err) {
			setError(err.message || "Booking failed.");
		} finally {
			setLoading(false);
		}
	};
	const handleClose = () => {
		setResult(null);
		onClose();
	};
	return /* @__PURE__ */ jsx("div", {
		style: {
			position: "fixed",
			inset: 0,
			zIndex: 100,
			backgroundColor: "rgba(15, 23, 42, 0.65)",
			backdropFilter: "blur(8px)",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			padding: "1rem"
		},
		className: "animate-fade-in",
		onClick: handleClose,
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				backgroundColor: "#ffffff",
				borderRadius: "20px",
				width: "100%",
				maxWidth: "500px",
				padding: "2rem",
				position: "relative",
				boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
				border: "1px solid #e2e8f0"
			},
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ jsx("button", {
				onClick: handleClose,
				style: {
					position: "absolute",
					top: "18px",
					right: "18px",
					background: "#f1f5f9",
					border: "none",
					borderRadius: "50%",
					width: "32px",
					height: "32px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					cursor: "pointer",
					color: "#64748b"
				},
				children: /* @__PURE__ */ jsx(X, { style: {
					width: 18,
					height: 18
				} })
			}), !result ? /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "inline-flex",
						alignItems: "center",
						gap: "6px",
						backgroundColor: "#eff6ff",
						color: "#1d4ed8",
						padding: "4px 10px",
						borderRadius: "9999px",
						fontSize: "0.74rem",
						fontWeight: 700,
						marginBottom: "10px"
					},
					children: [/* @__PURE__ */ jsx(Phone, { style: {
						width: 14,
						height: 14
					} }), /* @__PURE__ */ jsx("span", { children: "1-ON-1 ADMISSIONS COUNSELING" })]
				}),
				/* @__PURE__ */ jsx("h2", {
					style: {
						fontSize: "1.4rem",
						fontWeight: 800,
						color: "#0f172a"
					},
					children: "Talk to an Admissions Advisor"
				}),
				/* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "0.84rem",
						color: "#64748b",
						marginTop: "4px",
						marginBottom: "1.25rem"
					},
					children: "Clear all doubts regarding our zero upfront fees, syllabus, or placement guarantees directly with our senior mentors."
				}),
				error && /* @__PURE__ */ jsx("div", {
					style: {
						backgroundColor: "#fef2f2",
						color: "#dc2626",
						padding: "8px 12px",
						borderRadius: "6px",
						fontSize: "0.82rem",
						marginBottom: "1rem"
					},
					children: error
				}),
				/* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					style: {
						display: "flex",
						flexDirection: "column",
						gap: "0.9rem"
					},
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							style: {
								display: "block",
								fontSize: "0.82rem",
								fontWeight: 600,
								color: "#334155",
								marginBottom: "4px"
							},
							children: "Your Name *"
						}), /* @__PURE__ */ jsx("input", {
							type: "text",
							required: true,
							placeholder: "e.g. Vignesh P.",
							value: formData.name,
							onChange: (e) => setFormData({
								...formData,
								name: e.target.value
							}),
							style: {
								width: "100%",
								padding: "0.6rem 0.8rem",
								borderRadius: "8px",
								border: "1px solid #cbd5e1",
								fontSize: "0.9rem",
								outline: "none"
							}
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							style: {
								display: "block",
								fontSize: "0.82rem",
								fontWeight: 600,
								color: "#334155",
								marginBottom: "4px"
							},
							children: "WhatsApp / Phone Number *"
						}), /* @__PURE__ */ jsx("input", {
							type: "tel",
							required: true,
							placeholder: "+91 98765 43210",
							value: formData.phone,
							onChange: (e) => setFormData({
								...formData,
								phone: e.target.value
							}),
							style: {
								width: "100%",
								padding: "0.6rem 0.8rem",
								borderRadius: "8px",
								border: "1px solid #cbd5e1",
								fontSize: "0.9rem",
								outline: "none"
							}
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							style: {
								display: "block",
								fontSize: "0.82rem",
								fontWeight: 600,
								color: "#334155",
								marginBottom: "4px"
							},
							children: "Preferred Consultation Slot"
						}), /* @__PURE__ */ jsxs("select", {
							value: formData.slotTime,
							onChange: (e) => setFormData({
								...formData,
								slotTime: e.target.value
							}),
							style: {
								width: "100%",
								padding: "0.6rem 0.8rem",
								borderRadius: "8px",
								border: "1px solid #cbd5e1",
								fontSize: "0.9rem",
								backgroundColor: "#ffffff"
							},
							children: [
								/* @__PURE__ */ jsx("option", {
									value: "Today at 6:00 PM IST",
									children: "Today at 6:00 PM IST"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "Tomorrow at 11:30 AM IST",
									children: "Tomorrow at 11:30 AM IST"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "Tomorrow at 4:30 PM IST",
									children: "Tomorrow at 4:30 PM IST"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "Saturday at 3:00 PM IST",
									children: "Saturday at 3:00 PM IST"
								})
							]
						})] }),
						/* @__PURE__ */ jsx("button", {
							type: "submit",
							disabled: loading,
							className: "btn-primary",
							style: {
								width: "100%",
								padding: "0.75rem",
								marginTop: "6px"
							},
							children: loading ? "Booking via API..." : "Confirm Advisor Call Booking →"
						})
					]
				})
			] }) : /* @__PURE__ */ jsxs("div", {
				style: {
					textAlign: "center",
					padding: "1rem 0"
				},
				children: [
					/* @__PURE__ */ jsx("div", {
						style: {
							width: "56px",
							height: "56px",
							borderRadius: "50%",
							backgroundColor: "#ecfdf5",
							color: "#059669",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							margin: "0 auto 1rem"
						},
						children: /* @__PURE__ */ jsx(CheckCircle, { style: {
							width: 32,
							height: 32
						} })
					}),
					/* @__PURE__ */ jsx("h3", {
						style: {
							fontSize: "1.3rem",
							fontWeight: 800,
							color: "#0f172a"
						},
						children: "Call Confirmed!"
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "0.84rem",
							color: "#64748b",
							marginTop: "4px"
						},
						children: "Your admissions advisor booking has been logged in our system."
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							background: "#f8fafc",
							border: "1px solid #e2e8f0",
							borderRadius: "12px",
							padding: "1rem",
							margin: "1.25rem 0",
							textAlign: "left",
							fontSize: "0.84rem"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									marginBottom: "6px"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: { color: "#64748b" },
									children: "Booking Reference:"
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontWeight: 700,
										color: "#2563eb"
									},
									children: result.bookingReference
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									marginBottom: "6px"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: { color: "#64748b" },
									children: "Assigned Mentor:"
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontWeight: 600,
										color: "#0f172a"
									},
									children: result.assignedAdvisor
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: { color: "#64748b" },
									children: "Time Slot:"
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontWeight: 600,
										color: "#059669"
									},
									children: result.confirmedTime
								})]
							})
						]
					}),
					/* @__PURE__ */ jsx("button", {
						onClick: handleClose,
						className: "btn-primary",
						style: { width: "100%" },
						children: "Done"
					})
				]
			})]
		})
	});
}
// src/components/ISAModal.jsx
function ISAModal({ isOpen, onClose }) {
	if (!isOpen) return null;
	const handleDownload = () => {
		const blob = new Blob([`SAMPLE LEGAL INCOME SHARE AGREEMENT (ISA) - KARKA AI ACADEMY
Governed under the Indian Contract Act, 1872 & Registered NBFC Partner Framework

1. MINIMUM SALARY THRESHOLD:
The Student's payment obligation ONLY triggers upon securing a qualifying engineering employment offer with a Cost-to-Company (CTC) equal to or exceeding ₹5,00,000 per annum (₹5.0 LPA). If below ₹5.0 LPA, repayment is ₹0.

2. SHARE PERCENTAGE & MAXIMUM CAP:
- Monthly share: 15% of Gross Monthly Salary.
- Repayment Term: Exactly 16 monthly installments.
- Absolute Aggregate Cap: Under NO circumstance will total payments exceed ₹2,40,000. Once ₹2,40,000 is reached, all obligations extinguish immediately.

3. AUTOMATIC LAYOFF & PAUSE GRACE:
In the event of involuntary economic layoffs or company insolvency, payments immediately freeze without penalty, accrual of interest, or compound finance charges.

4. 7-DAY ZERO LIABILITY TRIAL:
The student may exit the cohort within the first 7 calendar days of training with ZERO financial liability.

Signed: Karka Edu-Tech Services Pvt. Ltd. & NBFC Credit Partner`], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "Karka-AI-Sample-ISA-Agreement-2026.txt";
		a.click();
		URL.revokeObjectURL(url);
	};
	return /* @__PURE__ */ jsx("div", {
		style: {
			position: "fixed",
			inset: 0,
			zIndex: 100,
			backgroundColor: "rgba(15, 23, 42, 0.65)",
			backdropFilter: "blur(8px)",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			padding: "1rem"
		},
		className: "animate-fade-in",
		onClick: onClose,
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				backgroundColor: "#ffffff",
				borderRadius: "20px",
				width: "100%",
				maxWidth: "640px",
				maxHeight: "85vh",
				overflowY: "auto",
				boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
				position: "relative",
				padding: "2rem",
				border: "1px solid #e2e8f0"
			},
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ jsx("button", {
					onClick: onClose,
					style: {
						position: "absolute",
						top: "18px",
						right: "18px",
						background: "#f1f5f9",
						border: "none",
						borderRadius: "50%",
						width: "32px",
						height: "32px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						cursor: "pointer",
						color: "#64748b"
					},
					children: /* @__PURE__ */ jsx(X, { style: {
						width: 18,
						height: 18
					} })
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						alignItems: "center",
						gap: "8px",
						marginBottom: "8px"
					},
					children: [/* @__PURE__ */ jsx("div", {
						style: {
							padding: "6px",
							borderRadius: "8px",
							backgroundColor: "#eff6ff",
							color: "#2563eb",
							display: "flex"
						},
						children: /* @__PURE__ */ jsx(ShieldCheck, { style: {
							width: 22,
							height: 22
						} })
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						style: {
							fontSize: "1.35rem",
							fontWeight: 800,
							color: "#0f172a"
						},
						children: "Standard Karka ISA Agreement"
					}), /* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "0.78rem",
							color: "#64748b"
						},
						children: "100% Legal Transparency • Backed by Certified NBFC Partners in India"
					})] })]
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						background: "#f8fafc",
						border: "1px solid #e2e8f0",
						borderRadius: "12px",
						padding: "1.25rem",
						margin: "1.25rem 0",
						fontSize: "0.84rem",
						color: "#334155",
						lineHeight: 1.6
					},
					children: [/* @__PURE__ */ jsx("h4", {
						style: {
							color: "#0f172a",
							fontWeight: 700,
							marginBottom: "6px"
						},
						children: "The 4 Irrevocable Protections:"
					}), /* @__PURE__ */ jsxs("ol", {
						style: {
							paddingLeft: "1.25rem",
							display: "flex",
							flexDirection: "column",
							gap: "8px"
						},
						children: [
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "₹5.0 LPA Minimum Threshold:" }), " If your annual compensation is under ₹5,00,000, your payment is exactly ₹0. You keep 100% of your earnings."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Absolute Maximum Payment Cap:" }), " Even if you land a ₹30 LPA or ₹50 LPA offer, total payments to Karka will NEVER exceed ₹2,40,000 (1.5x nominal tuition)."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Automatic Pause & Layoff Grace:" }), " In the event of market disruptions, emergency leave, or layoffs, monthly deductions freeze automatically without interest accrual."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "7-Day Zero Liability Cohort Trial:" }), " Experience live code reviews and peer programming for 7 full business days. If you realize the rigor isn't for you, drop out seamlessly with zero fees."] })
						]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						fontSize: "0.78rem",
						color: "#64748b",
						marginBottom: "1.5rem",
						padding: "10px",
						background: "#ecfdf5",
						borderRadius: "8px",
						border: "1px solid #a7f3d0"
					},
					children: "⚖️ Governed by the Indian Contract Act, 1872 with complete legal ombudsman recourse."
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						gap: "1rem",
						justifyContent: "flex-end"
					},
					children: [/* @__PURE__ */ jsx("button", {
						onClick: onClose,
						className: "btn-secondary",
						children: "Close"
					}), /* @__PURE__ */ jsxs("button", {
						onClick: handleDownload,
						className: "btn-primary",
						style: {
							display: "flex",
							alignItems: "center",
							gap: "6px"
						},
						children: [/* @__PURE__ */ jsx(Download, { style: {
							width: 14,
							height: 14
						} }), /* @__PURE__ */ jsx("span", { children: "Download Sample Agreement" })]
					})]
				})
			]
		})
	});
}
// src/components/ApiInspector.jsx
function ApiInspector() {
	const [isOpen, setIsOpen] = useState(false);
	const [logs, setLogs] = useState([]);
	const [selectedLog, setSelectedLog] = useState(null);
	const [isPinging, setIsPinging] = useState(false);
	useEffect(() => {
		MockAPI.getLiveTelemetry();
		return apiEvents.subscribe((log) => {
			setLogs((prev) => [log, ...prev].slice(0, 30));
		});
	}, []);
	const handleTestPing = async () => {
		setIsPinging(true);
		try {
			await MockAPI.getLiveTelemetry();
		} catch (e) {
			console.error(e);
		} finally {
			setIsPinging(false);
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		style: {
			position: "fixed",
			bottom: "18px",
			right: "18px",
			zIndex: 999,
			fontFamily: "var(--font-mono)"
		},
		children: [!isOpen && /* @__PURE__ */ jsxs("button", {
			onClick: () => setIsOpen(true),
			style: {
				display: "flex",
				alignItems: "center",
				gap: "8px",
				backgroundColor: "#0f172a",
				color: "#f8fafc",
				border: "1px solid #334155",
				padding: "8px 14px",
				borderRadius: "9999px",
				fontSize: "0.78rem",
				fontWeight: 600,
				cursor: "pointer",
				boxShadow: "0 8px 24px rgba(15, 23, 42, 0.4)",
				transition: "all 0.16s ease"
			},
			onMouseEnter: (e) => {
				e.currentTarget.style.borderColor = "#38bdf8";
				e.currentTarget.style.transform = "translateY(-2px)";
			},
			onMouseLeave: (e) => {
				e.currentTarget.style.borderColor = "#334155";
				e.currentTarget.style.transform = "translateY(0)";
			},
			children: [
				/* @__PURE__ */ jsx("span", {
					style: {
						width: "8px",
						height: "8px",
						borderRadius: "50%",
						backgroundColor: "#10b981",
						boxShadow: "0 0 8px #10b981"
					},
					className: "animate-live-dot"
				}),
				/* @__PURE__ */ jsx(TerminalIcon, { style: {
					width: 14,
					height: 14,
					color: "#38bdf8"
				} }),
				/* @__PURE__ */ jsx("span", { children: "API Console" }),
				/* @__PURE__ */ jsxs("span", {
					style: {
						background: "#1e293b",
						color: "#94a3b8",
						padding: "2px 6px",
						borderRadius: "4px",
						fontSize: "0.7rem"
					},
					children: [logs.length, " calls"]
				})
			]
		}), isOpen && /* @__PURE__ */ jsxs("div", {
			style: {
				width: "460px",
				maxWidth: "calc(100vw - 36px)",
				height: "420px",
				backgroundColor: "#0a0f1d",
				color: "#f8fafc",
				border: "1px solid #1e293b",
				borderRadius: "16px",
				boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(37, 99, 235, 0.15)",
				display: "flex",
				flexDirection: "column",
				overflow: "hidden"
			},
			className: "animate-fade-in",
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						padding: "10px 14px",
						background: "#0f172a",
						borderBottom: "1px solid #1e293b"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: "8px"
						},
						children: [/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								gap: "5px"
							},
							children: [
								/* @__PURE__ */ jsx("span", { style: {
									width: 10,
									height: 10,
									borderRadius: "50%",
									background: "#ef4444"
								} }),
								/* @__PURE__ */ jsx("span", { style: {
									width: 10,
									height: 10,
									borderRadius: "50%",
									background: "#f59e0b"
								} }),
								/* @__PURE__ */ jsx("span", { style: {
									width: 10,
									height: 10,
									borderRadius: "50%",
									background: "#10b981"
								} })
							]
						}), /* @__PURE__ */ jsx("span", {
							style: {
								fontSize: "0.8rem",
								fontWeight: 600,
								color: "#e2e8f0",
								marginLeft: "6px"
							},
							children: "Karka REST API Inspector"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: "6px"
						},
						children: [/* @__PURE__ */ jsxs("button", {
							onClick: handleTestPing,
							disabled: isPinging,
							title: "Trigger Health Ping",
							style: {
								background: "transparent",
								border: "1px solid #334155",
								color: "#94a3b8",
								padding: "3px 8px",
								borderRadius: "6px",
								fontSize: "0.72rem",
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
								gap: "4px"
							},
							children: [/* @__PURE__ */ jsx(RefreshCw, { style: {
								width: 12,
								height: 12
							} }), /* @__PURE__ */ jsx("span", { children: isPinging ? "Pinging..." : "Ping" })]
						}), /* @__PURE__ */ jsx("button", {
							onClick: () => setIsOpen(false),
							style: {
								background: "transparent",
								border: "none",
								color: "#94a3b8",
								cursor: "pointer",
								padding: "4px",
								display: "flex"
							},
							children: /* @__PURE__ */ jsx(X, { style: {
								width: 16,
								height: 16
							} })
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						flex: 1,
						overflow: "hidden"
					},
					children: [/* @__PURE__ */ jsx("div", {
						style: {
							width: selectedLog ? "50%" : "100%",
							borderRight: selectedLog ? "1px solid #1e293b" : "none",
							overflowY: "auto",
							padding: "6px"
						},
						children: logs.length === 0 ? /* @__PURE__ */ jsx("div", {
							style: {
								padding: "24px 12px",
								textAlign: "center",
								color: "#64748b",
								fontSize: "0.78rem"
							},
							children: "No API calls captured yet. Submit a form to see live telemetry."
						}) : logs.map((log) => {
							const isSuccess = log.status >= 200 && log.status < 300;
							const isSelected = selectedLog?.id === log.id;
							return /* @__PURE__ */ jsxs("div", {
								onClick: () => setSelectedLog(isSelected ? null : log),
								style: {
									padding: "6px 8px",
									marginBottom: "4px",
									borderRadius: "6px",
									background: isSelected ? "#1e293b" : "rgba(15, 23, 42, 0.6)",
									border: isSelected ? "1px solid #38bdf8" : "1px solid transparent",
									cursor: "pointer",
									fontSize: "0.72rem",
									display: "flex",
									flexDirection: "column",
									gap: "2px",
									transition: "all 0.12s ease"
								},
								children: [
									/* @__PURE__ */ jsxs("div", {
										style: {
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center"
										},
										children: [/* @__PURE__ */ jsx("span", {
											style: {
												fontWeight: 700,
												color: log.method === "POST" ? "#38bdf8" : "#34d399"
											},
											children: log.method
										}), /* @__PURE__ */ jsx("span", {
											style: {
												fontSize: "0.68rem",
												padding: "1px 5px",
												borderRadius: "3px",
												background: isSuccess ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)",
												color: isSuccess ? "#34d399" : "#f87171",
												fontWeight: 600
											},
											children: log.status
										})]
									}),
									/* @__PURE__ */ jsx("div", {
										style: {
											color: "#cbd5e1",
											overflow: "hidden",
											textOverflow: "ellipsis",
											whiteSpace: "nowrap"
										},
										children: log.endpoint
									}),
									/* @__PURE__ */ jsxs("div", {
										style: {
											display: "flex",
											justifyContent: "space-between",
											color: "#64748b",
											fontSize: "0.66rem"
										},
										children: [/* @__PURE__ */ jsx("span", { children: log.duration }), /* @__PURE__ */ jsx("span", { children: log.timestamp })]
									})
								]
							}, log.id);
						})
					}), selectedLog && /* @__PURE__ */ jsxs("div", {
						style: {
							width: "50%",
							padding: "10px",
							overflowY: "auto",
							background: "#070b14",
							fontSize: "0.7rem",
							display: "flex",
							flexDirection: "column",
							gap: "8px"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										color: "#38bdf8",
										fontWeight: 700
									},
									children: selectedLog.endpoint
								}), /* @__PURE__ */ jsx("button", {
									onClick: () => setSelectedLog(null),
									style: {
										background: "none",
										border: "none",
										color: "#64748b",
										cursor: "pointer"
									},
									children: "Close"
								})]
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								style: {
									color: "#94a3b8",
									fontSize: "0.65rem",
									marginBottom: "2px"
								},
								children: "REQUEST PAYLOAD:"
							}), /* @__PURE__ */ jsx("pre", {
								style: {
									background: "#0d1322",
									padding: "6px",
									borderRadius: "4px",
									color: "#a5f3fc",
									overflowX: "auto",
									fontSize: "0.66rem"
								},
								children: JSON.stringify(selectedLog.reqData || { empty: true }, null, 2)
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								style: {
									color: "#94a3b8",
									fontSize: "0.65rem",
									marginBottom: "2px"
								},
								children: "RESPONSE DATA:"
							}), /* @__PURE__ */ jsx("pre", {
								style: {
									background: "#0d1322",
									padding: "6px",
									borderRadius: "4px",
									color: "#86efac",
									overflowX: "auto",
									fontSize: "0.66rem"
								},
								children: JSON.stringify(selectedLog.resData, null, 2)
							})] })
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						padding: "6px 12px",
						background: "#0f172a",
						borderTop: "1px solid #1e293b",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						fontSize: "0.68rem",
						color: "#64748b"
					},
					children: [/* @__PURE__ */ jsxs("span", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: "6px"
						},
						children: [/* @__PURE__ */ jsx(Activity, { style: {
							width: 12,
							height: 12,
							color: "#10b981"
						} }), "API Server Online (FastAPI Engine)"]
					}), /* @__PURE__ */ jsx("span", {
						style: { color: "#38bdf8" },
						children: "karka.ai/api/v1"
					})]
				})
			]
		})]
	});
}
// src/components/Toast.jsx
function Toast({ message, type = "success", onClose, duration = 4e3 }) {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, duration);
		return () => clearTimeout(timer);
	}, [onClose, duration]);
	const isSuccess = type === "success";
	return /* @__PURE__ */ jsxs("div", {
		style: {
			position: "fixed",
			top: "20px",
			right: "20px",
			zIndex: 1e3,
			backgroundColor: "#ffffff",
			border: `1px solid ${isSuccess ? "#86efac" : "#fca5a5"}`,
			borderLeft: `5px solid ${isSuccess ? "#10b981" : "#ef4444"}`,
			padding: "12px 18px",
			borderRadius: "10px",
			boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
			display: "flex",
			alignItems: "center",
			gap: "12px",
			maxWidth: "420px"
		},
		className: "animate-fade-in",
		children: [
			/* @__PURE__ */ jsx("div", {
				style: {
					color: isSuccess ? "#10b981" : "#ef4444",
					flexShrink: 0
				},
				children: isSuccess ? /* @__PURE__ */ jsx(CheckCircle, { style: {
					width: 22,
					height: 22
				} }) : /* @__PURE__ */ jsx(X, { style: {
					width: 22,
					height: 22
				} })
			}),
			/* @__PURE__ */ jsx("div", {
				style: {
					flex: 1,
					fontSize: "0.86rem",
					color: "#1e293b",
					fontWeight: 500
				},
				children: message
			}),
			/* @__PURE__ */ jsx("button", {
				onClick: onClose,
				style: {
					background: "none",
					border: "none",
					color: "#94a3b8",
					cursor: "pointer",
					padding: "2px",
					display: "flex"
				},
				children: /* @__PURE__ */ jsx(X, { style: {
					width: 16,
					height: 16
				} })
			})
		]
	});
}
// src/App.jsx
function App() {
	const [activePage, setActivePage] = useState("home");
	const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
	const [assessmentTrack, setAssessmentTrack] = useState("AI Full-Stack Engineering");
	const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
	const [syllabusTrack, setSyllabusTrack] = useState(tracksData[0]);
	const [isCounselorOpen, setIsCounselorOpen] = useState(false);
	const [isISAOpen, setIsISAOpen] = useState(false);
	const [toast, setToast] = useState(null);
	const showToast = (message, type = "success") => {
		setToast({
			message,
			type
		});
	};
	const handleOpenAssessment = (trackName = "AI Full-Stack Engineering") => {
		setAssessmentTrack(trackName);
		setIsAssessmentOpen(true);
	};
	const handleOpenSyllabus = (trackTitleOrName) => {
		const found = tracksData.find((t) => t.title.toLowerCase().includes(trackTitleOrName.toLowerCase()) || t.id.includes(trackTitleOrName.toLowerCase()));
		setSyllabusTrack(found || tracksData[0]);
		setIsSyllabusOpen(true);
	};
	const handleOpenEligibility = () => {
		if (activePage === "home") {
			const el = document.getElementById("quick-eligibility");
			if (el) {
				el.scrollIntoView({ behavior: "smooth" });
				return;
			}
		}
		setActivePage("isa");
		window.scrollTo({
			top: 300,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		style: {
			minHeight: "100vh",
			display: "flex",
			flexDirection: "column"
		},
		children: [
			/* @__PURE__ */ jsx(Navbar, {
				activePage,
				setActivePage,
				onOpenAssessment: () => handleOpenAssessment(),
				onOpenEligibility: handleOpenEligibility
			}),
			/* @__PURE__ */ jsxs("main", {
				style: {
					flex: 1,
					paddingTop: "108px"
				},
				children: [
					activePage === "home" && /* @__PURE__ */ jsx(HomePage, {
						setActivePage,
						onOpenAssessment: handleOpenAssessment,
						onOpenSyllabus: handleOpenSyllabus,
						onOpenCounselor: () => setIsCounselorOpen(true),
						showToast
					}),
					activePage === "tracks" && /* @__PURE__ */ jsx(TracksPage, {
						onOpenAssessment: handleOpenAssessment,
						onOpenSyllabus: handleOpenSyllabus,
						onOpenCounselor: () => setIsCounselorOpen(true)
					}),
					activePage === "production-lab" && /* @__PURE__ */ jsx(ProductionLabPage, {
						onOpenAssessment: handleOpenAssessment,
						onOpenCounselor: () => setIsCounselorOpen(true)
					}),
					activePage === "isa" && /* @__PURE__ */ jsx(PayAfterPlacementPage, {
						onOpenAssessment: handleOpenAssessment,
						onOpenEligibility: handleOpenEligibility,
						onOpenCounselor: () => setIsCounselorOpen(true),
						onOpenISA: () => setIsISAOpen(true)
					}),
					activePage === "placements" && /* @__PURE__ */ jsx(PlacementsPage, {
						onOpenAssessment: handleOpenAssessment,
						onOpenCounselor: () => setIsCounselorOpen(true)
					})
				]
			}),
			/* @__PURE__ */ jsx(Footer, {
				setActivePage,
				onOpenAssessment: () => handleOpenAssessment(),
				onOpenCounselor: () => setIsCounselorOpen(true),
				onOpenISA: () => setIsISAOpen(true)
			}),
			/* @__PURE__ */ jsx(AssessmentModal, {
				isOpen: isAssessmentOpen,
				onClose: () => setIsAssessmentOpen(false),
				selectedTrack: assessmentTrack
			}),
			/* @__PURE__ */ jsx(SyllabusModal, {
				isOpen: isSyllabusOpen,
				onClose: () => setIsSyllabusOpen(false),
				track: syllabusTrack,
				onApply: (trackName) => handleOpenAssessment(trackName)
			}),
			/* @__PURE__ */ jsx(CounselorModal, {
				isOpen: isCounselorOpen,
				onClose: () => setIsCounselorOpen(false)
			}),
			/* @__PURE__ */ jsx(ISAModal, {
				isOpen: isISAOpen,
				onClose: () => setIsISAOpen(false)
			}),
			/* @__PURE__ */ jsx(ApiInspector, {}),
			toast && /* @__PURE__ */ jsx(Toast, {
				message: toast.message,
				type: toast.type,
				onClose: () => setToast(null)
			})
		]
	});
}
export { App as default };
